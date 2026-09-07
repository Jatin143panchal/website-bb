import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface BlogCard {
  id: string;
  edition: string;
  title: string;
  caption: string;
  bgStyle: React.CSSProperties;
  badgeColor: string;
  editionBadge: string;
  link: string;
  walnutBadge?: boolean;
}

const BLOG_CARDS: BlogCard[] = [
  {
    id: '1',
    edition: 'July Edition',
    title: 'OUR MONTH IN A NUTSHELL',
    caption: 'Highlights, rapid brand launches, and ₹12Cr+ marketplace scaling milestones from July.',
    bgStyle: {
      background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 50%, #EC4899 100%)',
    },
    badgeColor: 'bg-amber-100 text-amber-950 border border-amber-300',
    editionBadge: 'July Edition',
    link: '/blog',
    walnutBadge: true,
  },
  {
    id: '2',
    edition: 'June Edition',
    title: 'OUR MONTH IN A NUTSHELL',
    caption: 'Breaking down speed-to-market records and D2C inventory distribution across Blinkit & Nykaa.',
    bgStyle: {
      background: 'linear-gradient(135deg, #38BDF8 0%, #0284C7 60%, #EA580C 100%)',
    },
    badgeColor: 'bg-white/90 text-zinc-900 border border-white/40',
    editionBadge: 'June Edition',
    link: '/blog',
    walnutBadge: true,
  },
  {
    id: '3',
    edition: 'May Edition',
    title: 'OUR MONTH IN A NUTSHELL',
    caption: 'Turnkey compounding lab audits and 40+ factory allocations that set up Q2 revenue dominance.',
    bgStyle: {
      background: 'linear-gradient(135deg, #4A0E17 0%, #7F1D1D 60%, #991B1B 100%)',
    },
    badgeColor: 'bg-white/15 text-white border border-white/20',
    editionBadge: 'May Edition',
    link: '/blog',
    walnutBadge: true,
  },
  {
    id: '4',
    edition: 'Case Study',
    title: 'HOW A CATCHY LINE RECEIVED 193M+ VIEWS',
    caption: 'How A Catchy Line Received 193M+ Views And Started A Cultural Conversation.',
    bgStyle: {
      background: 'linear-gradient(135deg, #78004B 0%, #4A002C 100%)',
    },
    badgeColor: 'bg-white/20 text-white border border-white/30',
    editionBadge: 'Viral Playbook',
    link: '/blog',
    walnutBadge: false,
  },
];

export const FigmaBlogSection: React.FC = () => {
  return (
    <section 
      className="w-full bg-white py-20 sm:py-28 px-4 sm:px-8 lg:px-12 select-none border-b border-zinc-100 overflow-hidden"
      style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto">
        
        {/* ── HEADER WITH ASYMMETRIC DOT BULLET ──────── */}
        <div className="text-center mb-12 sm:mb-16 flex flex-col items-center justify-center">
          <div className="relative inline-block">
            {/* Top-left dot accent */}
            <span className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#111111]" />
            
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl font-normal uppercase text-[#111111] tracking-tight"
              style={{
                fontFamily: "'Playfair Display', 'Bodoni MT', 'Didot', 'Cormorant Garamond', Georgia, serif",
                letterSpacing: '-0.02em',
              }}
            >
              Blogs
            </h2>
          </div>
        </div>

        {/* ── HORIZONTAL CARDS STREAM / RESPONSIVE GRID ───────────────────── */}
        <div 
          className="w-full overflow-x-auto no-scrollbar scroll-smooth flex items-stretch gap-6 sm:gap-8 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {BLOG_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex-shrink-0 w-[300px] sm:w-[380px] md:w-[420px] flex flex-col justify-between group cursor-pointer"
            >
              <Link to={card.link} className="flex flex-col space-y-3">
                {/* Visual Card Container */}
                <div 
                  className="relative w-full aspect-[16/10] rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-white overflow-hidden shadow-sm group-hover:shadow-2xl group-hover:scale-[1.02] transition-all duration-300 border border-white/10"
                  style={card.bgStyle}
                >
                  {/* Top Bar */}
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/80">
                      BANEGA BRAND
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider backdrop-blur-xs ${card.badgeColor}`}>
                      {card.editionBadge}
                    </span>
                  </div>

                  {/* Main Graphic Graphic Badge / Title */}
                  <div className="my-auto py-2 z-10">
                    {card.walnutBadge ? (
                      <div className="bg-white/95 text-zinc-900 rounded-2xl p-4 shadow-xl border border-white/40 flex items-center justify-between gap-3">
                        <div>
                          <span 
                            className="text-xl sm:text-2xl font-normal uppercase tracking-tight text-[#111111] block leading-none"
                            style={{ fontFamily: "'Playfair Display', 'Bodoni MT', 'Didot', Georgia, serif" }}
                          >
                            OUR <span className="text-[#FF5722]">MONTH</span>
                          </span>
                          <span className="text-sm sm:text-base font-black tracking-tight text-blue-900 uppercase block mt-0.5">
                            IN A NUTSHELL
                          </span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-xl shrink-0 shadow-inner">
                          🌰
                        </div>
                      </div>
                    ) : (
                      <h3 
                        className="text-xl sm:text-2xl font-normal uppercase tracking-tight text-white leading-tight"
                        style={{ fontFamily: "'Playfair Display', 'Bodoni MT', 'Didot', Georgia, serif" }}
                      >
                        {card.title}
                      </h3>
                    )}
                  </div>

                  {/* Bottom Metas */}
                  <div className="flex items-center justify-between text-xs font-mono text-white/70 pt-2 z-10">
                    <span>{card.edition}</span>
                    <span className="flex items-center gap-1 font-sans font-bold text-white group-hover:text-amber-200 transition-colors">
                      Read <ArrowUpRight size={13} />
                    </span>
                  </div>

                  {/* Decorative subtle ambient backdrop texture */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                </div>

                {/* Subtitle Caption */}
                <p className="text-xs sm:text-sm font-semibold text-zinc-700 leading-snug group-hover:text-[#FF5722] transition-colors px-1 font-sans">
                  {card.caption}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Link to All Articles */}
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-zinc-900 hover:bg-[#FF5722] text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 active:scale-95 shadow-md group font-sans"
          >
            <span>View All Insights &amp; Dispatches</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FigmaBlogSection;
