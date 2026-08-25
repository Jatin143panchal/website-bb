import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const RevealText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="inline-block"
    >
      {text}
    </motion.span>
  );
};

export const StorySection = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.98, 1]);

  return (
    <section 
      ref={containerRef}
      className="py-16 md:py-24 px-6 bg-white overflow-hidden relative"
    >
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div 
          style={{ opacity, scale }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full border border-gray-100">
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Brand Promise</span>
          </div>
          
          <h2 className="text-[38px] md:text-[56px] font-display font-black tracking-tighter leading-[1.1] text-black">
            <RevealText text="Every product tells a story." /> <br />
            <span className="text-gray-300 italic">
              <RevealText text="We ensure yours feels high-end" delay={0.2} />
            </span> <br />
            <span className="text-[#b45309]">
              <RevealText text="before anyone even uses it." delay={0.4} />
            </span>
          </h2>

          <div className="flex items-center justify-center gap-6 pt-4">
             <div className="h-[1px] w-12 bg-gray-100" />
             <p className="text-[13px] font-black uppercase tracking-[0.2em] text-gray-400">Trust by Design</p>
             <div className="h-[1px] w-12 bg-gray-100" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
