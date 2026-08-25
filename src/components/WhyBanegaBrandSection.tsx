import React from 'react';
import { motion } from 'motion/react';
import { Award, UserCheck, Factory, Gavel, Radio, Heart } from 'lucide-react';

export const WhyBanegaBrandSection = () => {
  const cards = [
    {
      title: 'PRODUCT LAUNCH CONSULTANCY',
      boldText: 'Beyond branding. Beyond marketing.',
      desc: 'From product validation and manufacturer sourcing to launch and growth, we help founders navigate every critical decision through one proven framework.',
      icon: Award,
    },
    {
      title: 'SINGLE POINT OF CONTACT',
      boldText: 'One partner. One roadmap.',
      desc: 'Stop managing designers, manufacturers, consultants and marketers separately. Banega Brand owns the entire launch journey from idea to execution.',
      icon: UserCheck,
    },
    {
      title: 'MANUFACTURING ECOSYSTEM',
      boldText: 'Trusted production partners.',
      desc: 'Access a curated ecosystem of manufacturing partners across perfume, ayurveda, cosmetics, nutraceuticals and personal care categories.',
      icon: Factory,
    },
    {
      title: 'LAUNCH READINESS SUPPORT',
      boldText: 'Avoid delays and costly mistakes.',
      desc: 'Trademark guidance, GST support, compliance preparation and launch planning designed to keep your brand moving forward.',
      icon: Gavel,
    },
    {
      title: 'END-TO-END EXECUTION',
      boldText: 'From idea to market launch.',
      desc: 'Validation → Sourcing → Branding → Compliance → Launch → Growth. One connected execution system built for first-time founders.',
      icon: Radio,
    },
    {
      title: 'FOUNDER-FIRST APPROACH',
      boldText: 'Built for first-time founders.',
      desc: 'Every recommendation is based on practicality, investment efficiency and launch readiness—not agency deliverables.',
      icon: Heart,
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32 px-6 overflow-hidden border-t border-zinc-200 font-sans" id="why-banega-brand">
      <div className="max-w-7xl mx-auto text-left">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-3xl font-black uppercase tracking-[0.1em] text-[#D97706] block mb-4">
            WHY BANEGA BRAND
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7.5xl font-sans font-black tracking-tight text-[#111111]  leading-[0.95] mb-6 italic">
            Is he Preferred  <br />
            <span className="text-[#D97706]">Product Launch Company in India.</span>
          </h2>
              <p className="text-lg md:text-xl text-[#666666] font-bold leading-relaxed max-w-2xl">
                Most agencies help you look professional.<br />
                <span className="text-[#111111]">Banega Brand helps you become launch-ready.</span>
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-[#FAFAFA] border border-zinc-200/80 p-8 rounded-[36px] flex flex-col justify-between min-h-[290px] hover:bg-white hover:border-[#D97706]/40 hover:shadow-lg transition-all duration-300 group shadow-sm"
              >
                <div>
                  <div className="flex justify-between items-center mb-6 font-sans">
                    <div className="p-3.5 bg-white shadow-sm border border-zinc-200 rounded-2xl group-hover:bg-[#D97706] group-hover:text-white group-hover:border-transparent text-zinc-900 transition-all duration-300">
                      <Icon className="w-5 h-5 group-hover:text-white" />
                    </div>
                    <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">
                      BENEFIT 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-[#111111] uppercase tracking-tight mb-2">
                    {card.title}
                  </h3>

                  <p className="text-xs font-black text-[#D97706] mb-2 leading-tight">
                    {card.boldText}
                  </p>
                </div>

                <p className="text-xs text-[#666666] font-semibold leading-relaxed mt-2">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
