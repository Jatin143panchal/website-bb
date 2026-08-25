import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export const QuoteSection = () => {
  return (
    <section className="relative py-24 md:py-44 bg-white overflow-hidden flex flex-col items-center justify-center text-center px-6">
      {/* Decorative center light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6505]/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-[#FF6505]">
            <Quote size={32} className="fill-current" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[40px] md:text-8xl font-display font-black tracking-tighter leading-[0.95] text-black"
        >
          “Every successful brand was once just <span className="italic text-[#FF6505]">an idea someone was scared to start.</span>”
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <p className="text-2xl md:text-3xl font-display font-black tracking-tighter text-black">
            The difference is — <span className="italic">they started anyway.</span>
          </p>
          
          <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Your idea deserves clarity, execution, and the right people beside you to help bring it to life. Whether you’re starting from scratch or already have a product idea in mind, BanegaBrand helps you move forward with confidence.
          </p>

          <Link 
            to="/contact"
            className="px-12 py-6 bg-black text-white rounded-2xl font-black text-xl hover:bg-[#FF6505] transition-all shadow-2xl shadow-black/10 inline-block"
          >
            Start Your Brand Journey
          </Link>
        </motion.div>
      </div>

      {/* Side decors */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-gray-50/50 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-gray-50/50 to-transparent pointer-events-none" />
    </section>
  );
};
