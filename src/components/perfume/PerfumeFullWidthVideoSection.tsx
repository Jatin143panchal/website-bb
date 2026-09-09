import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const PerfumeFullWidthVideoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center'],
  });

  // Smooth scroll-driven full-width expansion animation
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const width = useTransform(scrollYProgress, [0, 1], ['92%', '100%']);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ['28px', '0px']);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full py-4 sm:py-6 md:py-8 bg-white overflow-hidden flex items-center justify-center select-none"
    >
      <motion.div
        style={{
          width,
          scale,
          borderRadius,
        }}
        className="relative overflow-hidden shadow-xl bg-white will-change-transform max-h-[60vh] h-[38vh] sm:h-[48vh] md:h-[58vh] flex items-center justify-center"
      >
        <video
          src="/assets/product_idea_formulation.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
        />

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
      </motion.div>
    </section>
  );
};

export default PerfumeFullWidthVideoSection;
