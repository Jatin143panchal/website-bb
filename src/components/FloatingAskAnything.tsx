import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ChevronUp, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

export const FloatingAskAnything: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const [isAtFooter, setIsAtFooter] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Process', path: '/process' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'About Us', path: '/about' },
    { name: 'Factory Network', path: '/manufacturer-network' },
    { name: 'Cost Guide', path: '/investment-guide' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  // Detect footer visibility so the footer's dedicated dock takes over smoothly
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (footerRect.top <= windowHeight - 60) {
        setIsAtFooter(true);
      } else {
        setIsAtFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3D Tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isExpanded) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(cardRef.current, {
      rotationY: x * 0.05,
      rotationX: -y * 0.05,
      transformPerspective: 600,
      duration: 0.25,
      ease: 'power1.out',
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (buttonRef.current) {
      gsap.fromTo(buttonRef.current, { scale: 0.88 }, { scale: 1, duration: 0.35, ease: 'back.out(2)' });
    }

    if (query.trim()) {
      navigate(`/services?q=${encodeURIComponent(query)}`);
      setIsExpanded(false);
    }
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsExpanded(false);
  };

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        isAtFooter
          ? 'opacity-0 pointer-events-none translate-y-8'
          : 'bottom-4 sm:bottom-6 w-[90%] sm:w-[360px] md:w-[390px] opacity-100 pointer-events-auto'
      }`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative backdrop-blur-2xl bg-zinc-950/92 hover:bg-zinc-950/98 border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-2 sm:p-2.5 rounded-full text-white transition-all duration-300 select-none"
      >
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF5722]/15 via-transparent to-amber-500/10 rounded-full opacity-70 pointer-events-none" />

        {/* Search Bar Row */}
        <form onSubmit={handleSearch} className="flex items-center gap-2 relative pl-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            placeholder="Ask anything..."
            className="flex-1 bg-transparent py-1.5 text-xs sm:text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-none"
          />

          <div className="flex items-center gap-1 pr-1">
            <button
              ref={buttonRef}
              type="submit"
              className="px-3.5 py-1.5 rounded-full bg-[#FF5722] hover:bg-[#E64A19] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
            >
              Ask
            </button>

            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label={isExpanded ? 'Collapse menu' : 'Expand menu'}
            >
              {isExpanded ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
            </button>
          </div>
        </form>

        {/* Expandable Quick Links Dropdown */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              <div className="pt-3 pb-1 border-t border-zinc-800/80 mt-2">
                <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.path)}
                      className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-[#FF5722] text-zinc-300 hover:text-white text-[11px] font-semibold transition-all flex items-center gap-1"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight size={10} />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
