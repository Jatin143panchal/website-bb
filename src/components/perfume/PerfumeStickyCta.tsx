import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface PerfumeStickyCtaProps {
  onOpenWizard?: () => void;
}

export const PerfumeStickyCta: React.FC<PerfumeStickyCtaProps> = ({ onOpenWizard }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Mobile Bottom Sticky Bar */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 inset-x-0 z-[9990] md:hidden p-3.5 bg-black/95 backdrop-blur-xl border-t border-zinc-800 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]"
          >
            <div className="flex items-center gap-2">
              <Link
                to="/contact"
                className="flex-1 py-3.5 px-5 rounded-full bg-white text-black font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>START MY PERFUME LAUNCH</span>
                <ArrowRight size={14} />
              </Link>

              <a
                href="https://wa.me/918796755169?text=Hi%20Mayank!%20I%20want%20to%20launch%20my%20perfume%20brand%20with%20Banega."
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 text-white flex items-center justify-center shrink-0 shadow-lg active:scale-95"
                aria-label="WhatsApp"
              >
                <MessageSquare size={18} />
              </a>
            </div>
          </motion.div>

          {/* Desktop Floating Bottom-Right Launch Pill */}
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex fixed bottom-8 right-8 z-[9990] items-center gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black font-black text-xs uppercase tracking-wider shadow-2xl border border-zinc-200 transition-all duration-200 active:scale-95 cursor-pointer select-none"
            >
              <span>START MY PERFUME</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PerfumeStickyCta;
