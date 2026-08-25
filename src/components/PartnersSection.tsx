import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Smartphone, Moon, Sun, Brain, 
  Dumbbell, PenTool, ChevronLeft, 
  ChevronRight, Sparkles, Droplets,
  Trophy, CheckCircle2, Zap, ShoppingBag, Star
} from 'lucide-react';
import gsap from 'gsap';
import { cn } from '../lib/utils';

export const PartnersSection = () => {
  return (
    <section className="relative py-24 md:py-44 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-[#b45309]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-100 rounded-full font-black text-[10px] uppercase tracking-[0.3em] text-gray-500"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#b45309] animate-pulse" />
                Strategic Launch Partner
              </motion.div>
              
              <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter leading-[0.95] text-black">
                Your Brand Needs <br />
                <span className="text-gray-300">More Than </span> 
                <span className="italic">a Product.</span>
              </h2>
              
              <p className="text-2xl md:text-3xl font-display font-black tracking-tighter text-[#b45309] italic">
                It Needs a Powerful Online Presence.
              </p>
              
              <p className="text-lg md:text-xl text-gray-400 font-bold max-w-lg leading-relaxed">
                We help founders launch professionally across websites, marketplaces, and digital platforms. No guesswork, just performance.
              </p>
            </div>

            <div className="pt-6 flex flex-wrap gap-4">
              <button className="px-10 py-6 bg-[#0f172a] text-white rounded-2xl font-black text-lg hover:bg-[#b45309] transition-all shadow-xl shadow-black/10 active:scale-95">
                Launch My Brand
              </button>
              <button className="px-10 py-6 border-2 border-gray-100 text-black rounded-2xl font-black text-lg hover:bg-gray-50 transition-all active:scale-95">
                View Showcase
              </button>
            </div>
          </motion.div>

          {/* Right Side: Abstract Digital Grid */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { 
                  title: "Mobile-First Experience", 
                  icon: Smartphone, 
                  label: "Cross-Device" 
                },
                { 
                  title: "High-Converting Product Pages", 
                  icon: Zap, 
                  label: "Sales Optimized" 
                },
                { 
                  title: "Brand-Focused UI/UX", 
                  icon: Sparkles, 
                  label: "Unique Identity" 
                },
                { 
                  title: "Premium Ecommerce Websites", 
                  icon: ShoppingBag, 
                  label: "Launch Ready" 
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "p-8 rounded-[40px] border border-gray-100 flex flex-col gap-6 group hover:border-[#b45309] transition-all duration-500",
                    i % 2 === 1 ? "mt-12" : "mb-12",
                    i === 0 ? "bg-[#0f172a] text-white" : "bg-white text-black"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110",
                    i === 0 ? "bg-white/10 text-white" : "bg-gray-50 text-[#b45309]"
                  )}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className={cn(
                      "text-[10px] font-black uppercase tracking-[0.2em] mb-1",
                      i === 0 ? "text-white/40" : "text-gray-400"
                    )}>{item.label}</p>
                    <h4 className="text-xl font-black tracking-tight leading-tight">{item.title}</h4>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Decorative Connection Line */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#b45309] rounded-full blur-[100px] opacity-10 -z-10" />
          </div>

        </div>

        {/* Categories Bar */}
        <div className="mt-32 pt-16 border-t border-gray-100 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { name: "Perfume", icon: Droplets },
            { name: "Ayurveda", icon: Sparkles },
            { name: "Nutraceuticals", icon: Zap },
            { name: "Cosmetics", icon: Star }
          ].map((cat, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="flex items-center gap-4 group cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#0B0908] group-hover:text-white transition-all">
                <cat.icon size={18} />
              </div>
              <span className="text-xl font-black tracking-tighter text-black/20 group-hover:text-black transition-colors">{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


