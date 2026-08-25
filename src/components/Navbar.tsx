import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Mail, 
  Phone, 
  ChevronDown, 
  Target, 
  Award, 
  Users,
  ShieldCheck,
  ArrowRight,
  Home,
  Layers,
  Briefcase,
  Info,
  Sparkles,
  CheckCircle,
  Star,
  BookOpen
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ================= AUTO-REGRESSION: SCROLL TO SECTION =================
  const scrollToSection = (path: string) => {
    // Check if path contains a hash (e.g., /about#founder)
    if (path.includes('#')) {
      const [basePath, hash] = path.split('#');
      
      // If we're not on the base path, navigate first
      if (location.pathname !== basePath && basePath !== '') {
        // Navigate to the page first, then scroll after navigation
        window.location.href = path;
        return;
      }
      
      // We're on the right page, scroll to section
      const element = document.getElementById(hash);
      if (element) {
        // Get navbar height for offset
        const navbar = document.querySelector('nav') as HTMLElement;
        const navbarHeight = navbar?.offsetHeight || 80;
        
        // Calculate position with offset
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight - 20;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
        setMobileDropdownOpen(null);
        
        // Update URL without causing a page reload
        window.history.pushState(null, '', path);
      }
    } else {
      // Regular navigation
      window.location.href = path;
    }
  };

  // Handle link click with auto-regression
  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    scrollToSection(path);
  };

  // Handle dropdown item click
  const handleDropdownItemClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    scrollToSection(path);
  };

  // Check if current location matches the section
  const isActiveSection = (path: string) => {
    if (path.includes('#')) {
      const [basePath, hash] = path.split('#');
      // Check if we're on the right page and the hash matches
      if (location.pathname === basePath || (basePath === '' && location.pathname === '/')) {
        const element = document.getElementById(hash);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top < 200 && rect.bottom > 0;
        }
      }
      return false;
    }
    return location.pathname === path;
  };

  // Check if any dropdown item is active
  const isDropdownActive = (dropdownItems: any[]) => {
    return dropdownItems.some(item => {
      if (item.path.includes('#')) {
        const [basePath, hash] = item.path.split('#');
        return location.pathname === basePath || (basePath === '' && location.pathname === '/');
      }
      return location.pathname === item.path;
    });
  };

  const navLinks = [
    { 
      name: 'Home', 
      path: '/',
      icon: Home
    },
    { 
      name: 'Process', 
      path: '/process',
      icon: Layers
    },
    { 
      name: 'Services', 
      path: '/services',
      icon: Briefcase
    },
    { 
      name: 'Blog', 
      path: '/blog',
      icon: BookOpen
    },
    { 
      name: 'About Us', 
      path: '/about',
      icon: Info,
      hasDropdown: true,
      isDropdownActive: isDropdownActive([
        { path: '/about#vision-mission' },
        { path: '/about#achievements' },
        { path: '/about#founder' },
        { path: '/about#why-choose-us' }
      ]),
      dropdownItems: [
        { 
          name: 'Vision & Mission', 
          path: '/about#vision-mission',
          icon: Target,
          description: 'Our purpose & future aspirations'
        },
        { 
          name: 'Our Achievements', 
          path: '/about#achievements',
          icon: Award,
          description: 'Milestones & recognitions'
        },
        { 
          name: 'Meet the Founder', 
          path: '/about#founder',
          icon: Users,
          description: 'Leadership & expertise'
        },
        { 
          name: 'Why Choose Us', 
          path: '/about#why-choose-us',
          icon: ShieldCheck,
          description: 'Our competitive advantage'
        }
      ]
    },
  ];

  const handleDropdownEnter = () => {
    setActiveDropdown('About Us');
  };

  const handleDropdownLeave = () => {
    setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === 'About Us' ? null : 'About Us');
  };

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === name ? null : name);
  };

  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      "bg-white/90 backdrop-blur-xl border-b border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
    )}>
      {/* Top micro announcement bar / gradient glow line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#D97706]/20 via-[#D97706] to-[#f59e0b]/40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2.5 group transition-transform duration-300 hover:scale-105 active:scale-95 shrink-0 py-1"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('/');
          }}
        >
          <div className="relative">
            <img 
              src="/assets/main_logo.webp" 
              alt="Banega Brand" 
              className="h-8 md:h-10 w-auto object-contain relative z-10"
              referrerPolicy="no-referrer"
            />
          </div>
        </Link>

        {/* Desktop Navigation - Interactive Center Navigation */}
        <nav 
          className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100/70 border border-zinc-200/60 backdrop-blur-md"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {navLinks.map((item) => {
            const isCurrentActive = location.pathname === item.path || (item.hasDropdown && (location.pathname.includes('/about') || item.isDropdownActive));
            const isHovered = hoveredLink === item.name;

            return (
              <div 
                key={item.name} 
                className="relative"
                ref={item.hasDropdown ? dropdownRef : undefined}
                onMouseEnter={() => {
                  setHoveredLink(item.name);
                  if (item.hasDropdown) handleDropdownEnter();
                }}
                onMouseLeave={item.hasDropdown ? handleDropdownLeave : undefined}
              >
                {/* Floating animated pill background when hovered */}
                {isHovered && (
                  <motion.div
                    layoutId="navHoverPill"
                    className="absolute inset-0 rounded-full bg-white shadow-sm border border-zinc-200/60 -z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}

                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={handleDropdownClick}
                      className={cn(
                        "relative z-10 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer",
                        isCurrentActive 
                          ? "text-[#D97706] font-black" 
                          : "text-zinc-700 hover:text-[#111111]",
                        activeDropdown === 'About Us' && "text-[#D97706]"
                      )}
                    >
                      <Info size={14} className={cn(
                        "transition-colors shrink-0",
                        isCurrentActive ? "text-[#D97706]" : "text-zinc-400 group-hover:text-zinc-600"
                      )} />
                      <span>{item.name}</span>
                      <ChevronDown 
                        size={12} 
                        className={cn(
                          "transition-transform duration-200 shrink-0",
                          activeDropdown === 'About Us' && "rotate-180 text-[#D97706]"
                        )} 
                      />
                    </button>

                    {/* Dropdown Menu with Enhanced Glassmorphism */}
                    <AnimatePresence>
                      {activeDropdown === 'About Us' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[340px] bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-zinc-200/80 overflow-hidden z-50 p-2"
                        >
                          {/* Dropdown Header */}
                          <div className="bg-gradient-to-br from-[#D97706]/10 via-amber-500/5 to-transparent px-4 py-3 rounded-xl border border-[#D97706]/15 mb-2">
                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#D97706] flex items-center gap-1.5">
                              <Sparkles size={11} className="fill-[#D97706]" /> About Banega Brand
                            </span>
                            <p className="text-xs text-zinc-600 font-semibold mt-0.5">
                              India's #1 Product Launch Engine
                            </p>
                          </div>

                          {/* Dropdown Items */}
                          <div className="space-y-1">
                            {item.dropdownItems?.map((dropdownItem) => {
                              const Icon = dropdownItem.icon;
                              const isActive = isActiveSection(dropdownItem.path);
                              return (
                                <a
                                  key={dropdownItem.name}
                                  href={dropdownItem.path}
                                  onClick={(e) => handleDropdownItemClick(e, dropdownItem.path)}
                                  className={cn(
                                    "flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200 group cursor-pointer",
                                    isActive ? "bg-[#D97706]/10 text-[#D97706]" : "hover:bg-zinc-100/80 text-zinc-800"
                                  )}
                                >
                                  <div className={cn(
                                    "p-2 rounded-lg transition-all duration-200 shrink-0",
                                    isActive ? "bg-[#D97706] text-white" : "bg-zinc-100 text-zinc-600 group-hover:bg-[#D97706] group-hover:text-white group-hover:shadow-md"
                                  )}>
                                    <Icon size={15} />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <span className={cn(
                                      "block text-xs font-black uppercase tracking-tight",
                                      isActive ? "text-[#D97706]" : "text-zinc-900 group-hover:text-[#111111]"
                                    )}>
                                      {dropdownItem.name}
                                    </span>
                                    <span className="text-[10px] font-medium text-zinc-400 block truncate">
                                      {dropdownItem.description}
                                    </span>
                                  </div>
                                  {isActive ? (
                                    <CheckCircle size={13} className="text-[#D97706] shrink-0" />
                                  ) : (
                                    <ArrowRight size={13} className="text-zinc-300 group-hover:text-[#D97706] group-hover:translate-x-1 transition-all shrink-0" />
                                  )}
                                </a>
                              );
                            })}
                          </div>

                          {/* Dropdown Footer */}
                          <div className="mt-2 pt-2 border-t border-zinc-150 px-2">
                            <a
                              href="/about"
                              onClick={(e) => handleNavClick(e, '/about')}
                              className="flex items-center justify-between py-2 px-3 rounded-lg text-[10px] font-black uppercase tracking-widest text-[#D97706] hover:bg-[#D97706]/10 transition-colors group cursor-pointer"
                            >
                              <span>Explore Full Story</span>
                              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform shrink-0" />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <a 
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className={cn(
                      "relative z-10 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer",
                      isCurrentActive 
                        ? "text-[#D97706] font-black" 
                        : "text-zinc-700 hover:text-[#111111]"
                    )}
                  >
                    <item.icon size={14} className={cn(
                      "transition-colors shrink-0",
                      isCurrentActive ? "text-[#D97706]" : "text-zinc-400 group-hover:text-zinc-600"
                    )} />
                    <span>{item.name}</span>
                    {isCurrentActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] animate-pulse ml-0.5" />
                    )}
                  </a>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Actions - Interactive Contact & Strategy Call Button */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Quick Contact Capsule */}
          <div className="flex items-center gap-1 bg-zinc-100/80 p-1 rounded-full border border-zinc-200/60 backdrop-blur-sm">
            <a 
              href="mailto:help@banegabrand.com" 
              className="p-2 hover:bg-white hover:shadow-sm rounded-full transition-all duration-200 group"
              title="Email Us"
            >
              <Mail size={15} className="text-zinc-600 group-hover:text-[#D97706] transition-colors" />
            </a>
            <div className="w-[1px] h-3.5 bg-zinc-200" />
            <a 
              href="tel:+918796755169" 
              className="p-2 hover:bg-white hover:shadow-sm rounded-full transition-all duration-200 group"
              title="Call Us"
            >
              <Phone size={15} className="text-zinc-600 group-hover:text-[#D97706] transition-colors" />
            </a>
          </div>

          {/* Interactive Glowing CTA Button */}
          <a 
            href="/contact"
            onClick={(e) => handleNavClick(e, '/contact')}
            className="relative group overflow-hidden bg-[#111111] text-white px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#D97706] transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg hover:shadow-[#D97706]/20 text-center whitespace-nowrap flex items-center gap-2 cursor-pointer"
          >
            <Sparkles size={13} className="text-[#D97706] group-hover:text-white fill-[#D97706] group-hover:fill-white animate-pulse shrink-0" />
            <span>Book Strategy Call</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="xl:hidden p-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 transition-all duration-200 shrink-0 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/30 z-40 xl:hidden"
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 w-full max-w-sm h-full bg-white z-50 xl:hidden shadow-2xl"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <a 
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('/');
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2"
                >
                  <img 
                    src="/assets/main_logo.webp" 
                    alt="Banega Brand" 
                    className="h-7 w-auto"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-sm font-black uppercase tracking-tight">
                    Banega <span className="text-[#D97706]">Brand</span>
                  </span>
                </a>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Mobile Menu Content */}
              <div className="p-5 overflow-y-auto h-[calc(100%-80px)]">
                <div className="space-y-1">
                  {navLinks.map((item) => {
                    if (item.hasDropdown) {
                      const isOpen = mobileDropdownOpen === item.name;
                      return (
                        <div key={item.name} className="border-b border-gray-100 last:border-0">
                          <button
                            onClick={() => toggleMobileDropdown(item.name)}
                            className="flex items-center justify-between w-full py-3.5 text-left"
                          >
                            <div className="flex items-center gap-3">
                              <item.icon size={18} className="text-[#D97706] shrink-0" />
                              <span className="text-sm font-bold text-[#111111]">
                                {item.name}
                              </span>
                            </div>
                            <ChevronDown 
                              size={18} 
                              className={cn(
                                "transition-transform duration-200 text-gray-400 shrink-0",
                                isOpen && "rotate-180"
                              )} 
                            />
                          </button>
                          
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-9 pb-3 space-y-1 overflow-hidden"
                              >
                                {item.dropdownItems?.map((dropdownItem) => {
                                  const Icon = dropdownItem.icon;
                                  const isActive = isActiveSection(dropdownItem.path);
                                  return (
                                    <a
                                      key={dropdownItem.name}
                                      href={dropdownItem.path}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(dropdownItem.path);
                                        setIsMobileMenuOpen(false);
                                        setMobileDropdownOpen(null);
                                      }}
                                      className={cn(
                                        "flex items-center gap-3 p-2.5 rounded-lg transition-all group",
                                        isActive ? "bg-[#D97706]/5" : "hover:bg-gray-50"
                                      )}
                                    >
                                      <div className={cn(
                                        "p-1.5 rounded-lg transition-colors shrink-0",
                                        isActive ? "bg-[#D97706]" : "bg-[#D97706]/10 group-hover:bg-[#D97706]"
                                      )}>
                                        <Icon size={14} className={cn(
                                          "transition-colors",
                                          isActive ? "text-white" : "text-[#D97706] group-hover:text-white"
                                        )} />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <span className={cn(
                                          "block text-sm font-bold",
                                          isActive ? "text-[#D97706]" : "text-[#111111]"
                                        )}>
                                          {dropdownItem.name}
                                        </span>
                                        <span className="text-[10px] text-gray-400">
                                          {dropdownItem.description}
                                        </span>
                                      </div>
                                      {isActive && (
                                        <CheckCircle size={12} className="text-[#D97706] shrink-0" />
                                      )}
                                    </a>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }
                    const isActive = location.pathname === item.path;
                    return (
                      <a
                        key={item.name}
                        href={item.path}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.path);
                          setIsMobileMenuOpen(false);
                        }}
                        className={cn(
                          "flex items-center gap-3 py-3.5 border-b border-gray-100 last:border-0 transition-colors",
                          isActive ? "text-[#D97706]" : "text-[#111111] hover:text-[#D97706]"
                        )}
                      >
                        <item.icon size={18} className={cn(
                          "shrink-0 transition-colors",
                          isActive ? "text-[#D97706]" : "text-gray-400"
                        )} />
                        <span className="text-sm font-bold">{item.name}</span>
                        {isActive && (
                          <span className="ml-auto text-[8px] font-bold text-[#D97706] bg-[#D97706]/10 px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                            Active
                          </span>
                        )}
                      </a>
                    );
                  })}
                </div>

                {/* Mobile Contact Section */}
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-3">
                    Get in Touch
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <a 
                      href="mailto:help@banegabrand.com" 
                      className="flex items-center gap-2.5 p-3.5 bg-gray-50 rounded-lg hover:bg-[#D97706]/5 transition-colors"
                    >
                      <Mail size={16} className="text-[#D97706] shrink-0" />
                      <div className="min-w-0">
                        <span className="block text-[9px] font-bold uppercase tracking-wider text-gray-400">Email</span>
                        <span className="text-[10px] font-bold text-[#111111] truncate">help@banegabrand.com</span>
                      </div>
                    </a>
                    <a 
                      href="tel:+918796755169" 
                      className="flex items-center gap-2.5 p-3.5 bg-gray-50 rounded-lg hover:bg-[#D97706]/5 transition-colors"
                    >
                      <Phone size={16} className="text-[#D97706] shrink-0" />
                      <div className="min-w-0">
                        <span className="block text-[9px] font-bold uppercase tracking-wider text-gray-400">Call</span>
                        <span className="text-[10px] font-bold text-[#111111]">+91 87967 55169</span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Mobile CTA */}
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('/contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="mt-5 w-full bg-[#D97706] text-white px-5 py-3.5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-[#0f172a] transition-all text-center flex items-center justify-center gap-2"
                >
                  <Sparkles size={15} className="shrink-0" />
                  <span>Book Strategy Call</span>
                </a>

                {/* Trust Badges */}
                <div className="mt-5 flex items-center justify-center gap-6">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle size={11} className="text-emerald-500 shrink-0" />
                    <span className="text-[8px] font-bold uppercase tracking-wider text-gray-400">120+ Launches</span>
                  </div>
                  <div className="w-px h-4 bg-gray-200" />
                  <div className="flex items-center gap-1.5">
                    <Star size={11} className="text-[#D97706] shrink-0" />
                    <span className="text-[8px] font-bold uppercase tracking-wider text-gray-400">4.9 Rating</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};