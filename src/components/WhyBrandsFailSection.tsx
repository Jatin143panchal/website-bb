import React from 'react';
import { motion } from 'motion/react';
import { ShieldX, AlertCircle, ShoppingCart, Ban, Box, TrendingDown, ArrowDown } from 'lucide-react';

export const WhyBrandsFailSection = () => {
  const failurePoints = [
    {
      title: 'Wrong Product Selection',
      desc: 'Many founders build products before validating market demand.',
      icon: ShoppingCart,
      badge: '01',
    },
    {
      title: 'Poor Manufacturer Choice',
      desc: 'Choosing the wrong production partner creates delays, quality issues and unnecessary costs.',
      icon: Ban,
      badge: '02',
    },
    {
      title: 'Weak Packaging',
      desc: 'Products are judged before they are experienced. Poor packaging damages trust.',
      icon: Box,
      badge: '03',
    },
    {
      title: 'Compliance Delays',
      desc: 'Missing registrations, trademark issues and compliance gaps slow down launches.',
      icon: ShieldX,
      badge: '04',
    },
    {
      title: 'No Launch Strategy',
      desc: 'Many founders focus on product development but ignore market entry planning.',
      icon: AlertCircle,
      badge: '05',
    },
    {
      title: 'No Growth Roadmap',
      desc: 'Launching is only the beginning. Without a growth plan, momentum quickly disappears.',
      icon: TrendingDown,
      badge: '06',
    },
  ];

  // Progressive staggered entry variants
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 18,
      },
    },
  };

  const handleScrollToSolution = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('why-banega-brand');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      className="relative py-16 md:py-20 px-6 overflow-hidden text-[#111111] border-t border-[#EAEAEA] font-sans" 
      id="why-launches-fail"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/assets/1.webp" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark/Light Overlay for readability */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#D97706] block mb-3">
            COMMON FOUNDER MISTAKES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#111111] uppercase leading-[0.95] mb-4">
            Why Most Product <br />
            <span className="text-[#D97706]">Launches Fail</span>
          </h2>
          <p className="text-[#666666] text-base md:text-lg font-bold leading-relaxed max-w-2xl">
            Most founders don't fail because they lack ambition.<br />
            <span className="text-[#111111]">They fail because they miss critical launch steps.</span>
          </p>
        </div>

        {/* Staggered Cards Grid */}
        <motion.div 
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-16"
        >
          {failurePoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-[#EAEAEA] flex flex-col justify-between min-h-[180px] transition-all duration-300 group shadow-sm hover:shadow-md hover:border-[#D97706]/35"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="p-2.5 bg-[#FAFAFA]/80 border border-[#EAEAEA] rounded-xl group-hover:bg-[#D97706] group-hover:text-white group-hover:border-transparent text-zinc-900 transition-all duration-300">
                      <Icon className="w-4 h-4 group-hover:text-white" />
                    </div>
                    <span className="text-[8px] font-black text-zinc-400 tracking-widest uppercase">
                      MISTAKE {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-lg font-black text-[#111111] uppercase tracking-tight mb-1.5">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[11px] md:text-xs text-[#666666] font-semibold leading-relaxed mt-2">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Elegant scroll indicator linking directly to the solution section below */}
        <div className="pt-2 flex flex-col items-center justify-center">
          <a 
            href="#why-banega-brand"
            onClick={handleScrollToSolution}
            className="inline-flex flex-col items-center gap-2 group text-xs font-black uppercase tracking-widest text-[#D97706] hover:text-[#111111] transition-colors duration-300"
          >
            <span>See the Solution</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="p-2.5 bg-white/90 backdrop-blur-sm border border-[#EAEAEA] rounded-full shadow-sm group-hover:border-[#D97706] transition-colors duration-300"
            >
              <ArrowDown className="w-3.5 h-3.5 text-[#D97706]" />
            </motion.div>
          </a>
        </div>

      </div>
    </section>
  );
};