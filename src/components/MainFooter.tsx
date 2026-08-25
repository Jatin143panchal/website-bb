import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

export const MainFooter = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Process', path: '/process' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/Privacy-Policy' },
    { name: 'Terms & Conditions', path: '/Terms-Conditions' },
    { name: 'Refund Policy', path: '/Refund-Policy' }
  ];

  return (
    <footer className="bg-[#F3F0EB] text-[#111111] pt-24 pb-12 overflow-hidden px-6 border-t border-[#D8D5CF] selection:bg-[#D97706] selection:text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Top area: Logo Capsule & Company Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#D8D5CF]">
          
          {/* Logo & Main Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" onClick={handleScrollToTop} className="inline-block hover:scale-105 transition-transform">
              <img 
                src="/assets/main_logo.webp" 
                alt="BanegaBrand" 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </Link>
            <p className="text-xs text-[#666666] font-semibold max-w-sm leading-relaxed">
              India's premier product launch consultancy. We help first-time founders transform raw product ideas into compliant, high-margin, market-ready luxury brands.
            </p>

            {/* Social Links - YouTube, Instagram, Facebook, LinkedIn */}
            <div className="flex gap-3 pt-2">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@CoachMayankTiwari"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl border border-[#D8D5CF] flex items-center justify-center text-[#666666] hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white transition-all cursor-pointer group"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/banegabrand?igsh=cWhocmlsNjI2bXZl"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl border border-[#D8D5CF] flex items-center justify-center text-[#666666] hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:border-transparent hover:text-white transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61579488867371"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl border border-[#D8D5CF] flex items-center justify-center text-[#666666] hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all cursor-pointer"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/banegabrand/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl border border-[#D8D5CF] flex items-center justify-center text-[#666666] hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white transition-all cursor-pointer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Core Footer Link Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
            
            {/* Quick Links Group */}
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D97706]">Quick Links</p>
              <ul className="space-y-2.5">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      to={link.path} 
                      onClick={handleScrollToTop}
                      className="font-bold text-[#666666] text-xs hover:text-[#111111] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links Group */}
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D97706]">Legal</p>
              <ul className="space-y-2.5">
                {legalLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      to={link.path} 
                      onClick={handleScrollToTop}
                      className="font-bold text-[#666666] text-xs hover:text-[#111111] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Group */}
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D97706]">CONTACT</p>
              <div className="space-y-4 text-xs font-semibold text-[#666666]">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase font-black text-[#111111] tracking-wider">Mobile Number</p>
                  <a href="tel:+918796755169" className="text-xs text-[#666666] hover:text-[#D97706] transition-colors flex items-center gap-2 font-bold select-all">
                    <Phone size={13} className="text-[#D97706]" />
                    +91 87967 55169
                  </a>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase font-black text-[#111111] tracking-wider">Email</p>
                  <a href="mailto:help@banegabrand.com" className="text-xs text-[#666666] hover:text-[#D97706] transition-colors flex items-center gap-2 font-bold select-all">
                    <Mail size={13} className="text-[#D97706]" />
                    help@banegabrand.com
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom copyright credits info */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black text-[#666666] uppercase tracking-widest">
          <p>© {new Date().getFullYear()} BANEGA BRAND INC. ALL RIGHTS RESERVED.</p>
          <span className="text-[#666666]">INDIA'S PRODUCT LAUNCH CONSULTANCY</span>
        </div>

      </div>
    </footer>
  );
};
