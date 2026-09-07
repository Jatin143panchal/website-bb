import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Send,
  Instagram,
  Youtube,
  Menu,
  X,
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';

const LOGO_ROTATING_TAGS = [
  '.product launch',
  '.launch your product',
  '.scale your brand',
  '.grow your brand',
];

const AnimatedLogoTagline: React.FC<{ isScrolled?: boolean }> = ({ isScrolled }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % LOGO_ROTATING_TAGS.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative inline-flex items-end overflow-hidden h-9 sm:h-10 pb-1 ml-1 sm:ml-1.5">
      <AnimatePresence mode="wait">
        <motion.span
          key={LOGO_ROTATING_TAGS[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#111111] font-black text-sm sm:text-base md:text-[17px] lg:text-[18px] tracking-tight whitespace-nowrap lowercase select-none leading-none"
          style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
        >
          {LOGO_ROTATING_TAGS[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState<'product' | 'brand'>('product');
  const location = useLocation();
  const servicesTimerRef = useRef<NodeJS.Timeout | null>(null);
  const aboutTimerRef = useRef<NodeJS.Timeout | null>(null);
  const industryTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns and mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setIsIndustryDropdownOpen(false);
  }, [location]);

  // Services Dropdown Handlers
  const handleMouseEnterServices = () => {
    if (servicesTimerRef.current) clearTimeout(servicesTimerRef.current);
    if (aboutTimerRef.current) clearTimeout(aboutTimerRef.current);
    if (industryTimerRef.current) clearTimeout(industryTimerRef.current);
    setIsAboutDropdownOpen(false);
    setIsIndustryDropdownOpen(false);
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeaveServices = () => {
    servicesTimerRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 250);
  };

  // About Dropdown Handlers
  const handleMouseEnterAbout = () => {
    if (aboutTimerRef.current) clearTimeout(aboutTimerRef.current);
    if (servicesTimerRef.current) clearTimeout(servicesTimerRef.current);
    if (industryTimerRef.current) clearTimeout(industryTimerRef.current);
    setIsServicesDropdownOpen(false);
    setIsIndustryDropdownOpen(false);
    setIsAboutDropdownOpen(true);
  };

  const handleMouseLeaveAbout = () => {
    aboutTimerRef.current = setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 250);
  };

  // Industry Dropdown Handlers
  const handleMouseEnterIndustry = () => {
    if (industryTimerRef.current) clearTimeout(industryTimerRef.current);
    if (aboutTimerRef.current) clearTimeout(aboutTimerRef.current);
    if (servicesTimerRef.current) clearTimeout(servicesTimerRef.current);
    setIsAboutDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setIsIndustryDropdownOpen(true);
  };

  const handleMouseLeaveIndustry = () => {
    industryTimerRef.current = setTimeout(() => {
      setIsIndustryDropdownOpen(false);
    }, 250);
  };

  const navLinks = [
    { name: 'Our Work', path: '/how-we-work', dropdownType: 'about' },
    { name: 'Services', path: '/services', dropdownType: 'services' },
    { name: 'Industry', path: '/services', dropdownType: 'industry' },
    { name: 'Blog', path: '/blog' },
  ];

  const isLinkActive = (path: string) => {
    if (path === '/services') {
      return (
        location.pathname === '/services' ||
        location.pathname.startsWith('/launch-') ||
        location.pathname === '/industries' ||
        location.pathname === '/manufacturer-network'
      );
    }
    if (path === '/how-we-work' || path === '/about') {
      return (
        location.pathname === '/about' ||
        location.pathname === '/how-we-work' ||
        location.pathname === '/our-partnerships' ||
        location.pathname === '/news-centre' ||
        location.pathname === '/team'
      );
    }
    return location.pathname === path;
  };

  // 2 Separate Photo Cards for Product Launch vs Brand Solutions
  const serviceCards = {
    product: [
      {
        tag: 'PERFUME & FINE FRAGRANCES',
        title: 'Luxury Perfume Launch Blueprint',
        image: '/assets/Banner 1.png',
        link: '/services',
        badge: 'LAUNCH',
      },
      {
        tag: 'SKINCARE & COLOR COSMETICS',
        title: 'Clinical Formulation & Factory Sourcing',
        image: '/assets/Banner 4.png',
        link: '/services',
        badge: 'FORMULATION',
      },
    ],
    brand: [
      {
        tag: 'IDENTITY & 3D PACKAGING',
        title: 'Luxury Bottle Moulds & Mono-Cartons',
        image: '/assets/Banner 3.png',
        link: '/services',
        badge: 'DESIGN',
      },
      {
        tag: 'D2C & MARKETPLACE SCALE',
        title: 'Amazon, Nykaa & Blinkit Distribution',
        image: '/assets/klust_landing_page.webp',
        link: '/services',
        badge: 'SCALE',
      },
    ],
  };

  return (
    <header
      className="fixed top-3 sm:top-5 inset-x-0 z-50 flex flex-col items-center px-3 sm:px-6 pointer-events-none"
      style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
    >

      {/* ── MAIN FLOATING PILL NAVBAR ──────────────────────────────────────── */}
      <nav
        className={`pointer-events-auto relative transition-all duration-500 ease-out flex items-center justify-between ${isScrolled
          ? 'w-full max-w-7xl px-4 sm:px-8 py-3 bg-transparent border-transparent shadow-none'
          : 'w-full max-w-4xl lg:max-w-[1020px] px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/85 backdrop-blur-xl border border-white/80 shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:bg-white/90'
          }`}
        aria-label="Main Navigation"
      >

        {/* ── 1. LOGO / FAVICON ICON + .PRODUCT LAUNCH ANIMATION ──── */}
        <div
          className={`flex items-center select-none transition-all duration-500 ${isScrolled
            ? 'absolute left-1/2 -translate-x-1/2 z-20 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-white/90 ring-1 ring-black/[0.05] shadow-[0_14px_45px_rgba(0,0,0,0.13),0_2px_8px_rgba(0,0,0,0.04)]'
            : 'z-10'
            }`}
          style={isScrolled ? {
            backgroundColor: 'rgba(255, 255, 255, 0.72)',
            backdropFilter: 'blur(28px) saturate(190%)',
            WebkitBackdropFilter: 'blur(28px) saturate(190%)',
          } : undefined}
        >
          <Link
            to="/"
            onClick={() => {
              if (isScrolled) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="inline-flex items-end gap-0 group transition-transform duration-200 hover:scale-[1.02] active:scale-95 select-none"
            aria-label="Banega Brand Home"
          >
            {isScrolled ? (
              <img
                src="/assets/banega_logo_official.png"
                alt="Banega Brand"
                width="140"
                height="44"
                className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-all duration-300 drop-shadow-sm shrink-0"
              />
            ) : (
              <img
                src="/assets/banega_logo_official.png"
                alt="Banega Brand"
                width="160"
                height="48"
                className="h-8 sm:h-9 md:h-10 lg:h-11 w-auto object-contain transition-all duration-300 drop-shadow-xs shrink-0"
              />
            )}
            <AnimatedLogoTagline isScrolled={isScrolled} />
          </Link>
        </div>

        {/* ── 2. CENTER COLUMN: NAVIGATION LINKS (Visible when NOT Scrolled) ── */}
        {!isScrolled && (
          <div className="hidden md:flex items-center justify-center gap-1.5 lg:gap-2 z-10 flex-1">
            {navLinks.map((link) => {
              const active = isLinkActive(link.path);

              if (link.dropdownType === 'about') {
                return (
                  <div
                    key={link.name}
                    onMouseEnter={handleMouseEnterAbout}
                    onMouseLeave={handleMouseLeaveAbout}
                    className="relative"
                  >
                    <Link
                      to={link.path}
                      className={`px-3.5 lg:px-4 py-1.5 rounded-full text-xs lg:text-[13px] font-semibold transition-all duration-200 select-none flex items-center gap-1 ${active || isAboutDropdownOpen
                        ? 'text-[#FF5722] font-bold bg-orange-50/90 shadow-2xs'
                        : 'text-zinc-800 hover:text-[#FF5722] hover:bg-black/[0.04]'
                        }`}
                    >
                      <span>{link.name}</span>
                    </Link>
                  </div>
                );
              }

              if (link.dropdownType === 'services') {
                return (
                  <div
                    key={link.name}
                    onMouseEnter={handleMouseEnterServices}
                    onMouseLeave={handleMouseLeaveServices}
                    className="relative"
                  >
                    <Link
                      to={link.path}
                      className={`px-3.5 lg:px-4 py-1.5 rounded-full text-xs lg:text-[13px] font-semibold transition-all duration-200 select-none flex items-center gap-1 ${active || isServicesDropdownOpen
                        ? 'text-[#FF5722] font-bold bg-orange-50/90 shadow-2xs'
                        : 'text-zinc-800 hover:text-[#FF5722] hover:bg-black/[0.04]'
                        }`}
                    >
                      <span>{link.name}</span>
                    </Link>
                  </div>
                );
              }

              if (link.dropdownType === 'industry') {
                return (
                  <div
                    key={link.name}
                    onMouseEnter={handleMouseEnterIndustry}
                    onMouseLeave={handleMouseLeaveIndustry}
                    className="relative"
                  >
                    <Link
                      to={link.path}
                      className={`px-3.5 lg:px-4 py-1.5 rounded-full text-xs lg:text-[13px] font-semibold transition-all duration-200 select-none flex items-center gap-1 ${active || isIndustryDropdownOpen
                        ? 'text-[#FF5722] font-bold bg-orange-50/90 shadow-2xs'
                        : 'text-zinc-800 hover:text-[#FF5722] hover:bg-black/[0.04]'
                        }`}
                    >
                      <span>{link.name}</span>
                    </Link>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 lg:px-4 py-1.5 rounded-full text-xs lg:text-[13px] font-semibold transition-all duration-200 select-none ${active
                    ? 'text-[#FF5722] font-bold bg-orange-50/90 shadow-2xs'
                    : 'text-zinc-800 hover:text-[#FF5722] hover:bg-black/[0.04]'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}

        {/* ── 3. RIGHT COLUMN: START YOUR LAUNCH BUTTON (TOP ONLY) + MOBILE BURGER BUTTON ───────────── */}
        <div
          className={`ml-auto flex items-center justify-end gap-1.5 sm:gap-2 z-20 flex-shrink-0 transition-all duration-300 ${
            isScrolled
              ? 'md:hidden'
              : ''
          }`}
        >
          {/* Bold Black & Orange Gradient "Start Your Launch" CTA Button (Only visible at the top, hidden on scroll) */}
          {!isScrolled && (
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#111111] via-[#2b1810] to-[#FF5722] hover:from-[#FF5722] hover:to-[#111111] text-white font-extrabold text-xs sm:text-[13px] uppercase tracking-wider shadow-[0_4px_20px_rgba(255,87,34,0.35)] hover:shadow-[0_6px_25px_rgba(255,87,34,0.6)] border border-orange-400/25 transition-all duration-300 active:scale-95 select-none shrink-0 group cursor-pointer"
            >
              <span>Start Your Launch</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform text-[#FF8A65]" />
            </Link>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-full flex items-center justify-center bg-zinc-100/90 hover:bg-zinc-200 text-zinc-800 transition-colors shadow-2xs border border-zinc-200/50 cursor-pointer ml-1"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* ── 4. ABOUT US MEGA MENU DROPDOWN (DESKTOP) ────────────────────────── */}
      <AnimatePresence>
        {isAboutDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.99 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={handleMouseEnterAbout}
            onMouseLeave={handleMouseLeaveAbout}
            className="pointer-events-auto hidden md:block w-full max-w-4xl lg:max-w-5xl mt-3 p-6 sm:p-7 rounded-2xl bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.14)] z-40 select-none"
          >
            <div className="grid grid-cols-12 gap-8 items-start">

              {/* LEFT COLUMN: About Navigation List */}
              <div className="col-span-5 space-y-3.5 pr-6 border-r border-zinc-100">
                {[
                  { label: 'How We Work', path: '/how-we-work' },
                  { label: 'Our Partnerships', path: '/our-partnerships' },
                  { label: 'News Centre', path: '/news-centre' },
                  { label: 'Meet The Team', path: '/team' },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => setIsAboutDropdownOpen(false)}
                    className="group flex items-center justify-between py-1.5 px-2 rounded-xl transition-all cursor-pointer hover:bg-zinc-50"
                  >
                    <span className="text-lg sm:text-xl font-bold tracking-tight text-[#111111] group-hover:text-[#FF5722] transition-colors">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>

              {/* RIGHT COLUMN: 2 Featured Blog / Article Cards */}
              <div className="col-span-7 grid grid-cols-2 gap-5">

                {/* Article Card 1 */}
                <Link
                  to="/blog"
                  onClick={() => setIsAboutDropdownOpen(false)}
                  className="group flex flex-col space-y-2 cursor-pointer"
                >
                  <div
                    className="relative rounded-2xl overflow-hidden p-5 sm:p-6 text-white min-h-[170px] flex flex-col justify-between shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
                    style={{
                      background: 'linear-gradient(135deg, #78004B 0%, #4A002C 100%)',
                    }}
                  >
                    <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-white/90">
                      <span>BANEGA BRAND</span>
                      <span className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-xs text-[9px]">ARTICLE</span>
                    </div>

                    <div className="space-y-1 my-auto pt-2">
                      <h4 className="text-base sm:text-lg font-black uppercase tracking-tight leading-tight text-white group-hover:underline">
                        HOW A CATCHY LINE RECEIVED 193M+ VIEWS
                      </h4>
                    </div>

                    <div className="text-sm font-black text-white/60">#</div>
                  </div>

                  <p className="text-xs font-semibold text-zinc-700 leading-snug group-hover:text-[#FF5722] transition-colors">
                    How A Catchy Line Received 193M+ Views And Started A Cultural Conversation
                  </p>
                </Link>

                {/* Article Card 2 */}
                <Link
                  to="/blog"
                  onClick={() => setIsAboutDropdownOpen(false)}
                  className="group flex flex-col space-y-2 cursor-pointer"
                >
                  <div
                    className="relative rounded-2xl overflow-hidden p-5 sm:p-6 text-white min-h-[170px] flex flex-col justify-between shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
                    style={{
                      background: 'linear-gradient(135deg, #0284C7 0%, #0369A1 100%)',
                    }}
                  >
                    <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-white/90">
                      <span>BANEGA BRAND</span>
                      <span className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-xs text-[9px]">ARTICLE</span>
                    </div>

                    <div className="space-y-1 my-auto pt-2">
                      <h4 className="text-base sm:text-lg font-black uppercase tracking-tight leading-tight text-white group-hover:underline">
                        HOW TO EXPAND YOUR DIGITAL FOOTPRINT
                      </h4>
                    </div>

                    <div className="text-sm font-black text-white/60">#</div>
                  </div>

                  <p className="text-xs font-semibold text-zinc-700 leading-snug group-hover:text-[#FF5722] transition-colors">
                    How To Expand Your Digital Footprint with Omnichannel Strategy
                  </p>
                </Link>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 5. SERVICES MEGA MENU DROPDOWN (DESKTOP) ────────────────────────── */}
      <AnimatePresence>
        {isServicesDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.99 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={handleMouseEnterServices}
            onMouseLeave={handleMouseLeaveServices}
            className="pointer-events-auto hidden md:block w-full max-w-4xl lg:max-w-5xl mt-3 p-6 sm:p-7 rounded-2xl bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.14)] z-40 select-none"
          >
            <div className="grid grid-cols-12 gap-8 items-start">

              {/* LEFT COLUMN: Services Navigation */}
              <div className="col-span-5 space-y-2 pr-6 border-r border-zinc-100">
                {[
                  { id: 'product', label: 'Product Launch Solutions', path: '/services' },
                  { id: 'brand', label: 'Scale & Performance Growth', path: '/services' },
                ].map((item) => {
                  const isSelected = activeServiceTab === item.id;
                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      onMouseEnter={() => setActiveServiceTab(item.id as any)}
                      onClick={() => setIsServicesDropdownOpen(false)}
                      className="group flex items-center justify-between py-3 px-3 rounded-xl transition-all cursor-pointer hover:bg-zinc-50"
                    >
                      <span className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-200 ${isSelected ? 'text-[#FF5722] translate-x-1' : 'text-[#111111] group-hover:text-[#FF5722]'
                        }`}>
                        {item.label}
                      </span>
                      <ArrowRight size={18} className={`transition-all duration-200 ${isSelected ? 'opacity-100 text-[#FF5722] translate-x-0' : 'opacity-0 -translate-x-2'
                        }`} />
                    </Link>
                  );
                })}

                <div className="pt-2 px-3">
                  <Link
                    to="/services"
                    onClick={() => setIsServicesDropdownOpen(false)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-black transition-colors"
                  >
                    <span>View All Services</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>

              {/* RIGHT COLUMN: 2 Dedicated Clickable Photo Cards */}
              <div className="col-span-7 grid grid-cols-2 gap-4">
                {serviceCards[activeServiceTab].map((card, idx) => (
                  <Link
                    key={idx}
                    to={card.link}
                    onClick={() => setIsServicesDropdownOpen(false)}
                    className="group relative rounded-xl overflow-hidden bg-white border border-zinc-200/90 shadow-2xs hover:shadow-lg hover:border-black/50 transition-all duration-300 flex flex-col justify-between p-3"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-zinc-100 mb-3">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-[9px] font-mono font-bold uppercase tracking-wider text-white">
                        {card.badge}
                      </span>
                    </div>

                    {/* Card Meta Content */}
                    <div className="space-y-1 px-1 pb-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#FF5722] block">
                        {card.tag}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-[#111111] leading-snug group-hover:text-[#FF5722] transition-colors">
                        {card.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 6. INDUSTRY MEGA MENU DROPDOWN (DESKTOP) ────────────────────────── */}
      <AnimatePresence>
        {isIndustryDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.99 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={handleMouseEnterIndustry}
            onMouseLeave={handleMouseLeaveIndustry}
            className="pointer-events-auto hidden md:block w-full max-w-5xl lg:max-w-6xl mt-3 p-6 sm:p-7 rounded-2xl bg-white/98 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.14)] z-40 select-none"
          >
            <div className="grid grid-cols-12 gap-7 items-start">

              {/* LEFT COLUMN: Industry Vertical Links */}
              <div className="col-span-4 space-y-2 pr-5 border-r border-zinc-100">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FF5722] px-3 block mb-1">
                  Key Launch Verticals
                </span>

                {[
                  { title: 'Perfume & Fine Fragrances', sub: 'Custom Fragrance Development', path: '/industry/perfume' },
                  { title: 'Color Cosmetics & Makeup', sub: 'High-Pigment Lab Formulations', path: '/industry/cosmetics' },
                  { title: 'Authentic Ayurveda', sub: 'AYUSH Certified Range', path: '/industry/ayurveda' },
                  { title: 'Clinical Skincare & Derma', sub: 'Active Peptides & SPF Blends', path: '/industry/skincare' },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => setIsIndustryDropdownOpen(false)}
                    className="group flex flex-col py-2.5 px-3 rounded-xl transition-all cursor-pointer hover:bg-zinc-50 border border-transparent hover:border-zinc-100"
                  >
                    <span className="text-base font-bold tracking-tight text-[#111111] group-hover:text-[#FF5722] transition-colors">
                      {item.title}
                    </span>
                    <span className="text-[11px] text-zinc-400 font-medium group-hover:text-zinc-600 transition-colors">
                      {item.sub}
                    </span>
                  </Link>
                ))}

                <div className="pt-2 px-3">
                  <Link
                    to="/services"
                    onClick={() => setIsIndustryDropdownOpen(false)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-black transition-colors"
                  >
                    <span>View All 4 Industries</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>

              {/* RIGHT COLUMN: 4 High-Impact Visual Photo Cards (Perfume, Cosmetics, Ayurveda, Skincare) */}
              <div className="col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-2.5">

                {/* Card 1: Perfume */}
                <Link
                  to="/industry/perfume"
                  onClick={() => setIsIndustryDropdownOpen(false)}
                  className="group relative rounded-xl overflow-hidden bg-white border border-zinc-200/90 shadow-2xs hover:shadow-lg hover:border-[#FF5722]/50 transition-all duration-300 flex flex-col justify-between p-2"
                >
                  <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-zinc-100 mb-2">
                    <img
                      src="/assets/perfume/venotine_ruby_midnight.jpg"
                      alt="Perfume & Fine Fragrances"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/75 backdrop-blur-xs text-[8.5px] font-mono font-bold uppercase tracking-wider text-white">
                      PERFUME
                    </span>
                  </div>
                  <div className="space-y-0.5 px-0.5 pb-1">
                    <span className="text-[8.5px] font-black uppercase tracking-widest text-[#FF5722] block">
                      FINE FRAGRANCES
                    </span>
                    <h4 className="text-xs font-bold text-[#111111] leading-snug group-hover:text-[#FF5722] transition-colors truncate">
                      Luxury Perfume Launch
                    </h4>
                    <p className="text-[10px] text-zinc-500 leading-tight line-clamp-2">
                      Custom blends &amp; glass flacons.
                    </p>
                  </div>
                </Link>

                {/* Card 2: Cosmetics */}
                <Link
                  to="/industry/cosmetics"
                  onClick={() => setIsIndustryDropdownOpen(false)}
                  className="group relative rounded-xl overflow-hidden bg-white border border-zinc-200/90 shadow-2xs hover:shadow-lg hover:border-[#FF5722]/50 transition-all duration-300 flex flex-col justify-between p-2"
                >
                  <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-zinc-100 mb-2">
                    <img
                      src="/assets/Banner 2.png"
                      alt="Color Cosmetics"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/75 backdrop-blur-xs text-[8.5px] font-mono font-bold uppercase tracking-wider text-white">
                      COSMETICS
                    </span>
                  </div>
                  <div className="space-y-0.5 px-0.5 pb-1">
                    <span className="text-[8.5px] font-black uppercase tracking-widest text-[#FF5722] block">
                      COLOR MAKEUP
                    </span>
                    <h4 className="text-xs font-bold text-[#111111] leading-snug group-hover:text-[#FF5722] transition-colors truncate">
                      Color Cosmetics
                    </h4>
                    <p className="text-[10px] text-zinc-500 leading-tight line-clamp-2">
                      High pigments &amp; matte lipsticks.
                    </p>
                  </div>
                </Link>

                {/* Card 3: Ayurveda */}
                <Link
                  to="/industry/ayurveda"
                  onClick={() => setIsIndustryDropdownOpen(false)}
                  className="group relative rounded-xl overflow-hidden bg-white border border-zinc-200/90 shadow-2xs hover:shadow-lg hover:border-[#FF5722]/50 transition-all duration-300 flex flex-col justify-between p-2"
                >
                  <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-zinc-100 mb-2">
                    <img
                      src="/assets/Banner 3.png"
                      alt="Authentic Ayurveda"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/75 backdrop-blur-xs text-[8.5px] font-mono font-bold uppercase tracking-wider text-white">
                      AYURVEDA
                    </span>
                  </div>
                  <div className="space-y-0.5 px-0.5 pb-1">
                    <span className="text-[8.5px] font-black uppercase tracking-widest text-[#FF5722] block">
                      HERBAL &amp; AYUSH
                    </span>
                    <h4 className="text-xs font-bold text-[#111111] leading-snug group-hover:text-[#FF5722] transition-colors truncate">
                      Authentic Ayurveda
                    </h4>
                    <p className="text-[10px] text-zinc-500 leading-tight line-clamp-2">
                      AYUSH certified botanical oils.
                    </p>
                  </div>
                </Link>

                {/* Card 4: Clinical Skincare */}
                <Link
                  to="/industry/skincare"
                  onClick={() => setIsIndustryDropdownOpen(false)}
                  className="group relative rounded-xl overflow-hidden bg-white border border-zinc-200/90 shadow-2xs hover:shadow-lg hover:border-[#FF5722]/50 transition-all duration-300 flex flex-col justify-between p-2"
                >
                  <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-zinc-100 mb-2">
                    <img
                      src="/assets/skincare/grevety_skincare_full_collection.jpg"
                      alt="Clinical Skincare & Derma"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/75 backdrop-blur-xs text-[8.5px] font-mono font-bold uppercase tracking-wider text-white">
                      SKINCARE
                    </span>
                  </div>
                  <div className="space-y-0.5 px-0.5 pb-1">
                    <span className="text-[8.5px] font-black uppercase tracking-widest text-[#FF5722] block">
                      CLINICAL DERMA
                    </span>
                    <h4 className="text-xs font-bold text-[#111111] leading-snug group-hover:text-[#FF5722] transition-colors truncate">
                      Clinical Skincare
                    </h4>
                    <p className="text-[10px] text-zinc-500 leading-tight line-clamp-2">
                      Active serums &amp; derma blends.
                    </p>
                  </div>
                </Link>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 7. FULL-FEATURED RESPONSIVE MOBILE DRAWER MENU ─────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto md:hidden w-full max-w-sm sm:max-w-md mt-3 bg-white/95 backdrop-blur-2xl rounded-3xl p-5 sm:p-6 border border-zinc-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.18)] max-h-[82vh] overflow-y-auto space-y-5"
          >
            {/* Primary Navigation Links */}
            <div className="flex flex-col space-y-1">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl font-bold text-base text-zinc-900 hover:bg-zinc-100 transition-colors text-left"
              >
                Home
              </Link>

              <Link
                to="/how-we-work"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl font-bold text-base text-zinc-900 hover:bg-zinc-100 transition-colors text-left flex items-center justify-between"
              >
                <span>Our Work</span>
                <span className="text-xs text-zinc-400 font-normal">Manifesto &amp; Network</span>
              </Link>

              <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-orange-100 ml-4 mb-2">
                {[
                  { label: 'How We Work', path: '/how-we-work' },
                  { label: 'Meet The Team', path: '/team' },
                  { label: 'Our Partnerships', path: '/our-partnerships' },
                ].map((sub, i) => (
                  <Link
                    key={i}
                    to={sub.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-600 hover:text-[#FF5722] hover:bg-orange-50/60"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>

              <Link
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl font-bold text-base text-zinc-900 hover:bg-zinc-100 transition-colors text-left flex items-center justify-between"
              >
                <span>Services</span>
                <span className="text-xs text-zinc-400 font-normal">All Blueprints</span>
              </Link>

              <Link
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl font-bold text-base text-zinc-900 hover:bg-zinc-100 transition-colors text-left flex items-center justify-between"
              >
                <span>Industry</span>
                <span className="text-xs text-zinc-400 font-normal">4 Dedicated Verticals</span>
              </Link>

              <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-orange-100 ml-4 mb-2">
                {[
                  { label: 'Perfume & Fine Fragrances', path: '/industry/perfume' },
                  { label: 'Color Cosmetics & Makeup', path: '/industry/cosmetics' },
                  { label: 'Authentic Ayurveda & Herbal', path: '/industry/ayurveda' },
                  { label: 'Clinical Skincare & Derma', path: '/industry/skincare' },
                ].map((sub, i) => (
                  <Link
                    key={i}
                    to={sub.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-600 hover:text-[#FF5722] hover:bg-orange-50/60"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>

              <Link
                to="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl font-bold text-base text-zinc-900 hover:bg-zinc-100 transition-colors text-left"
              >
                Blog &amp; Insights
              </Link>
            </div>

            {/* Mobile Call-To-Action Button */}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#111111] via-[#2b1810] to-[#FF5722] text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(255,87,34,0.35)] border border-orange-400/25 transition-all active:scale-95"
            >
              <span>Start Your Launch</span>
              <ArrowRight size={14} className="text-[#FF8A65]" />
            </Link>

            {/* Mobile Social Links Row */}
            <div className="pt-2 border-t border-zinc-100 flex items-center justify-center gap-3">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-100 text-zinc-700 hover:bg-[#229ED9] hover:text-white transition-all shadow-xs"
                aria-label="Telegram"
              >
                <Send size={15} className="-rotate-12" />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-100 text-zinc-700 hover:bg-[#1877F2] hover:text-white transition-all shadow-xs"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/banegabrand"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-100 text-zinc-700 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white transition-all shadow-xs"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://youtube.com/@BanegaBrand"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-100 text-zinc-700 hover:bg-[#FF0000] hover:text-white transition-all shadow-xs"
                aria-label="YouTube"
              >
                <Youtube size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
