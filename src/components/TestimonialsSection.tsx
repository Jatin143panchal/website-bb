import React from 'react';
import { motion } from 'motion/react';
import { Star, PhoneCall } from 'lucide-react';

export const TestimonialsSection = () => {
  const writtenTestimonials = [
    {
      quote: 'The trademark compliance and drug license filing was completed flawlessly. Absolute lifesaver for first-time founders.',
      author: 'Vikram Mehta',
      brand: 'Kera Labs',
      role: 'Founder',
    },
    {
      quote: 'Packaging is where you win first sales. Their custom box designs command incredible premiums on retail shelves.',
      author: 'Anjali Sharma',
      brand: 'Veda Cosmetiques',
      role: 'CEO',
    },
    {
      quote: 'A single point of contact meant we did not have to negotiate with suppliers, lawyers, or developers separately.',
      author: 'Kabir Roy',
      brand: 'Himalayan Nectar',
      role: 'Co-Founder',
    }
  ];

  const handleScrollToContact = () => {
    const el = document.getElementById('consultation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 md:py-32 px-6 overflow-hidden font-sans relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#D97706]/10 via-white to-white" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#D97706]/5 via-transparent to-white/50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-20 text-left space-y-4"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D97706] block">
            THE REAL-WORLD PROOF
          </span>
          <h2 className="text-4xl md:text-6xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none">
            Founders Who Trusted <br />
            <span className="text-[#D97706]">The Process</span>
          </h2>
          <p className="text-[#666666] font-bold text-lg md:text-xl max-w-xl">
            Real metrics, real scale, and complete transparency from high-growth categories across India.
          </p>
        </motion.div>

        {/* Written Testimonials */}
        <div className="space-y-4">
          <span className="text-[11px] font-black text-zinc-455 uppercase tracking-widest block mb-6">
            [ WRITTEN REVIEWS & AUDITS ]
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {writtenTestimonials.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(217,119,6,0.15)' }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-[28px] border border-zinc-200 flex flex-col justify-between transition-colors duration-300 shadow-sm hover:border-[#D97706]/40 cursor-default"
              >
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <motion.div
                        key={s}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: i * 0.12 + s * 0.05, type: 'spring', stiffness: 300 }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-3.5 h-3.5 text-[#D97706] fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-[#111111] font-semibold text-sm leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-150">
                  <p className="text-xs font-black uppercase text-[#111111] leading-none">
                    {item.author}
                  </p>
                  <p className="text-[10px] font-black text-[#D97706] uppercase tracking-wider mt-1.5">
                    {item.role}, {item.brand}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Talk to our team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button
            onClick={handleScrollToContact}
            className="px-10 py-5 bg-[#D97706] hover:bg-[#111111] text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 inline-flex items-center gap-3 active:scale-95 shadow-sm hover:shadow-md cursor-pointer leading-none"
          >
            <PhoneCall className="w-4 h-4 text-white" />
            TALK TO OUR TEAM
          </button>
        </motion.div>

      </div>
    </section>
  );
};