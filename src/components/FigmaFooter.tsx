import React, { useState } from 'react';
import { Search, Instagram, Youtube, Send } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const FigmaFooter: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    const q = query.toLowerCase();
    if (q.includes('perfume') || q.includes('fragrance')) navigate('/launch-perfume-brand');
    else if (q.includes('skincare') || q.includes('derma') || q.includes('cosmetic')) navigate('/launch-personal-care-brand');
    else if (q.includes('ayurveda') || q.includes('herbal')) navigate('/launch-ayurveda-brand');
    else if (q.includes('cost') || q.includes('price') || q.includes('investment')) navigate('/investment-guide');
    else if (q.includes('contact') || q.includes('call') || q.includes('phone')) navigate('/contact');
    else if (q.includes('about') || q.includes('mayank')) navigate('/about');
    else if (q.includes('news') || q.includes('press')) navigate('/news-centre');
    else if (q.includes('partner') || q.includes('ecosystem')) navigate('/our-partnerships');
    else navigate(`/services?q=${encodeURIComponent(query)}`);
  };

  const navPills = [
    { label: 'About', path: '/about' },
    { label: 'Work', path: '/services' },
    { label: 'Services', path: '/services' },
    { label: 'Partnerships', path: '/our-partnerships' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer
      className="relative w-full overflow-hidden select-none bg-white text-[#111111] pt-16 sm:pt-24 min-h-[640px] sm:min-h-[760px] flex flex-col justify-between"
      style={{ fontFamily: "'Gill Sans Ultra Bold', 'Gill Sans MT Extra Bold', 'Gill Sans', 'Outfit', 'Mulish', sans-serif" }}
    >

      {/* ── 1. FULL-COVER BLURRED BACKGROUND VIDEO LAYER ─────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <video
          src="/assets/footervideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover filter blur-[22px] scale-110 opacity-70"
        />
        {/* Exact Multi-Stop Gradient Transition Matching Screenshot */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 246, 240, 0.85) 30%, rgba(255, 145, 90, 0.75) 60%, #FF5722 92%, #FF5722 100%)'
          }}
        />
      </div>

      {/* ── 2. TOP VIBRANT ORANGE "BANEGA" HEADLINE (GILL SANS ULTRA BOLD) ── */}
      <div className="relative z-10 w-full px-4 sm:px-8 text-center max-w-5xl mx-auto">
        <h2
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-black uppercase tracking-tight text-[#FF5722] leading-none"
          style={{
            fontFamily: "'Gill Sans Ultra Bold', 'Gill Sans MT Extra Bold', 'Gill Sans', 'Outfit', 'Arial Black', sans-serif",
            letterSpacing: '-0.02em'
          }}
        >
          BANEGA
        </h2>
      </div>

      {/* ── 3. FULL-STRETCH EDGE-TO-EDGE "Brand" WATERMARK WITH VIDEO MASK ─ */}
      <div className="relative w-screen -mx-[calc((100vw-100%)/2)] px-0 -my-8 sm:-my-14 md:-my-20 flex items-center justify-center overflow-hidden z-5 select-none pointer-events-none">
        <svg
          viewBox="0 0 1600 360"
          className="w-full h-auto max-h-[260px] sm:max-h-[380px] md:max-h-[500px] lg:max-h-[620px] select-none"
          preserveAspectRatio="none"
        >
          <defs>
            <mask id="footer-exact-brand-mask" x="0" y="0" width="1600" height="360">
              <rect x="0" y="0" width="1600" height="360" fill="black" />
              <text
                x="50%"
                y="68%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                textLength="1560"
                lengthAdjust="spacingAndGlyphs"
                style={{
                  fontFamily: "'Gill Sans Ultra Bold', 'Gill Sans MT Extra Bold', 'Gill Sans', 'Outfit', sans-serif",
                  fontSize: '380px',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                }}
              >
                BRAND
              </text>
            </mask>
          </defs>

          {/* Video displaying inside the full-stretch giant "Brand" text */}
          <foreignObject width="1600" height="360" mask="url(#footer-exact-brand-mask)">
            <div className="w-full h-full relative overflow-hidden bg-zinc-900">
              <video
                src="/assets/footervideo.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover filter brightness-110 contrast-125 scale-105"
              />
              {/* Warm Orange-Peach Tint */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF5722]/30 to-[#FF3D00]/60 mix-blend-color" />
            </div>
          </foreignObject>
        </svg>
      </div>

      {/* ── 4. CENTER FROSTED GLASS CAPSULE CARD (LOWERED TO BOTTOM) ─────── */}
      <div className="relative z-20 max-w-xl w-full mx-auto px-4 -mt-2 sm:-mt-4 md:-mt-6 mb-2 sm:mb-4">
        <div className="p-5 sm:p-7 rounded-[26px] sm:rounded-[34px] bg-white/20 backdrop-blur-3xl border border-white/40 shadow-[0_25px_60px_rgba(0,0,0,0.12)] space-y-4 text-left">

          {/* Ask us anything search input */}
          <form onSubmit={handleSearch} className="relative w-full flex items-center justify-between">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask us anything"
              className="w-full bg-transparent text-zinc-900 placeholder:text-zinc-700/80 text-sm sm:text-base font-semibold outline-none pr-10"
              style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
            />
            <button
              type="submit"
              className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-zinc-700 hover:text-black transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search size={18} className="text-zinc-700 hover:text-black" />
            </button>
          </form>

          {/* Frosted Pill Navigation Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {navPills.map((pill) => (
              <Link
                key={pill.label}
                to={pill.path}
                onClick={handleScrollToTop}
                className="px-4 py-1.5 rounded-full bg-white/25 hover:bg-white/45 border border-white/40 text-zinc-900 hover:text-black text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer active:scale-95 shadow-2xs"
                style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
              >
                {pill.label}
              </Link>
            ))}
          </div>

        </div>
      </div>

      {/* ── 5. EXACT VIBRANT ORANGE BOTTOM STRIP (MATCHING SCREENSHOT) ───── */}
      <div
        className="relative z-10 w-full bg-[#FF5722] mt-12 sm:mt-16 py-5 px-4 sm:px-8 lg:px-16 border-t border-white/20"
        style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
      >
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-white/95">

          {/* Left Legal Links */}
          <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-start">
            <Link to="/privacy-policy" onClick={handleScrollToTop} className="hover:underline transition-all">
              Privacy Policy
            </Link>
            <Link to="/refund-policy" onClick={handleScrollToTop} className="hover:underline transition-all">
              Cookie Policy
            </Link>
          </div>

          {/* Center Social Media Links */}
          <div className="flex items-center gap-3 justify-center py-2 sm:py-0">
            <a
              href="https://instagram.com/banegabrand"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#FF5722] flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
              aria-label="Instagram"
            >
              <Instagram size={15} />
            </a>
            <a
              href="https://youtube.com/@BanegaBrand"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#FF5722] flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
              aria-label="YouTube"
            >
              <Youtube size={15} />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#FF5722] flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
              aria-label="Facebook"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#FF5722] flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
              aria-label="Telegram"
            >
              <Send size={14} className="-rotate-12 translate-y-[-0.5px]" />
            </a>
          </div>

          {/* Right Navigation Links */}
          <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-end">
            <Link to="/blog" onClick={handleScrollToTop} className="hover:underline transition-all">
              Perspectives
            </Link>
            <Link to="/our-partnerships" onClick={handleScrollToTop} className="hover:underline transition-all">
              Our Partnerships
            </Link>
            <Link to="/news-centre" onClick={handleScrollToTop} className="hover:underline transition-all">
              News Centre
            </Link>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="max-w-[1440px] mx-auto mt-4 pt-3 border-t border-white/15 text-center text-[10px] sm:text-[11px] text-white/80 font-mono">
          © {new Date().getFullYear()} BANEGA BRAND. ALL RIGHTS RESERVED.
        </div>
      </div>

    </footer>
  );
};

export default FigmaFooter;
