import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SolutionItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  capabilities: string[];
  linkUrl: string;
}

// ── CRISP VECTOR PARTNER LOGOS ───────────────────────────────────────────────

const MetaPartnerLogo = () => (
  <div className="flex items-center gap-2">
    <svg viewBox="0 0 100 60" className="w-10 h-7 fill-[#0081FB]">
      <path d="M74.5 13.5 C68.5 13.5 63 17 59.5 22.5 C56 17 50.5 13.5 44.5 13.5 C33.5 13.5 25 22.5 25 33.5 C25 44.5 33.5 53.5 44.5 53.5 C50.5 53.5 56 50 59.5 44.5 C63 50 68.5 53.5 74.5 53.5 C85.5 53.5 94 44.5 94 33.5 C94 22.5 85.5 13.5 74.5 13.5 Z M44.5 46 C37.5 46 32 40.5 32 33.5 C32 26.5 37.5 21 44.5 21 C49 21 53 23.5 55.5 27.5 C52.5 32.5 49 37.5 45.5 42.5 C45 44.5 44.8 46 44.5 46 Z M74.5 46 C67.5 46 62 40.5 62 33.5 C62 26.5 67.5 21 74.5 21 C81.5 21 87 26.5 87 33.5 C87 40.5 81.5 46 74.5 46 Z" />
    </svg>
    <div className="flex flex-col text-left">
      <span className="text-xl sm:text-2xl font-black tracking-tight text-[#111111] leading-none">
        Meta
      </span>
      <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider mt-0.5">
        Business Partner
      </span>
    </div>
  </div>
);

const GooglePartnerBadge = () => (
  <div className="flex flex-col items-center justify-center p-2.5 border border-zinc-200 rounded-md bg-white shadow-2xs w-32 sm:w-36 text-center">
    <div className="flex items-center justify-center gap-1 mb-0.5">
      <span className="text-lg font-black text-[#4285F4]">G</span>
      <span className="text-[11px] font-bold text-zinc-700 tracking-tight">Google Partner</span>
    </div>
    <div className="w-full bg-[#3C4043] text-white text-[8px] font-bold uppercase tracking-wider py-0.5 px-1.5 rounded-xs mt-0.5">
      PREMIER 2024
    </div>
  </div>
);

const AmazonLogo = () => (
  <div className="flex flex-col items-center justify-center">
    <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#111111] font-sans lowercase leading-none">
      amazon
    </span>
    {/* Orange curved smile arrow */}
    <svg viewBox="0 0 100 22" className="w-16 sm:w-20 h-4 mt-0.5">
      <path
        d="M 6 6 Q 50 20 94 6"
        fill="none"
        stroke="#FF9900"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M 85 4 L 95 6 L 90 14 Z"
        fill="#FF9900"
      />
    </svg>
  </div>
);

const FlipkartLogo = () => (
  <div className="flex items-center gap-2 justify-center">
    <div className="w-8 h-8 rounded-lg bg-[#2874F0] flex items-center justify-center text-[#FFE11B] font-black text-xl italic shadow-2xs">
      f
    </div>
    <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#2874F0] italic font-sans">
      Flipkart
    </span>
  </div>
);

const NykaaLogo = () => (
  <div className="flex items-center justify-center">
    <span 
      className="text-2xl sm:text-3xl font-black tracking-widest text-[#FC2779] uppercase italic"
      style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.12em' }}
    >
      NYKAA
    </span>
  </div>
);

const ONDCLogo = () => (
  <div className="flex flex-col items-center justify-center">
    <span className="text-2xl sm:text-3xl font-black tracking-tighter text-[#333333] font-sans">
      ON<span className="text-[#008BD2]">D</span>C
    </span>
    <span className="text-[8px] uppercase font-semibold text-zinc-400 tracking-wider">
      Open Network for Digital Commerce
    </span>
  </div>
);

// ── ACCORDION ITEMS ─────────────────────────────────────────────────────────

const MEDIA_SOLUTIONS: SolutionItem[] = [
  {
    id: 'media-buying',
    title: 'Media Buying',
    shortDesc: 'Precision real-time bidding across high-intent programmatic and social auctions.',
    description: 'We negotiate, execute, and optimize cross-platform paid media budgets with direct partner-level CPM rates across Meta, Google Search, YouTube, Amazon Sponsored Ads, and Quick Commerce networks.',
    capabilities: [
      'Multi-channel programmatic buying & direct publisher deals',
      'Real-time automated budget reallocation based on blended ROAS',
      'Lookalike audience modeling & high-LTV customer targeting',
      'Brand safety verification & click-fraud prevention protocols',
    ],
    linkUrl: '/contact',
  },
  {
    id: 'media-planning',
    title: 'Media Planning',
    shortDesc: 'Strategic full-funnel budget forecasting and category timeline mapping.',
    description: 'Our media strategists build rigorous 90-day launch media plans that synchronize product seeding, top-of-funnel viral awareness, middle-funnel consideration, and bottom-funnel direct checkout conversions.',
    capabilities: [
      'Category consumer journey mapping & frequency capping',
      'Cross-platform reach & engagement simulation models',
      'Seasonal launch pacing for Diwali, Valentine & Festive spikes',
      'Competitive share-of-voice (SOV) and search arbitrage analysis',
    ],
    linkUrl: '/contact',
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    shortDesc: 'Direct-response conversion engine delivering 4x+ ROAS on D2C channels.',
    description: 'We turn ad clicks into high-margin recurring orders through hyper-personalized creative angles, custom landing page checkout funnels, dynamic product ads (DPA), and conversion rate optimization (CRO).',
    capabilities: [
      'Iterative creative sprints testing 50+ UGC & hook angles weekly',
      'Shopify Plus & custom checkout funnel rate optimization (CRO)',
      'Catalog sales campaigns on Amazon, Nykaa & Flipkart Seller Central',
      'Post-purchase upsell & VIP loyalty subscription modeling',
    ],
    linkUrl: '/contact',
  },
  {
    id: 'martech',
    title: 'MarTech for Media',
    shortDesc: 'Advanced server-side tracking, CDP integrations, and automated lifecycle retention.',
    description: 'We engineer modern marketing technology stacks that insulate your brand against signal loss, utilizing Conversions API (CAPI), Google Enhanced Conversions, and automated WhatsApp/Email retention flows.',
    capabilities: [
      'Server-side Conversions API (CAPI) & first-party data architecture',
      'HubSpot, MoEngage & Klaviyo omnichannel CRM automation',
      'Predictive customer churn & repeat purchase triggers',
      'Live executive reporting dashboards with custom blended CAC/ROAS metrics',
    ],
    linkUrl: '/contact',
  },
];

export const MediaSolutionsSection: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>('media-buying');

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <section 
      id="launch-growth-solutions"
      className="w-full bg-white text-[#111111] py-20 sm:py-28 md:py-36 px-4 sm:px-8 lg:px-16 select-none border-b border-zinc-100"
      style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* ── LEFT COLUMN: TITLE, SUBTITLE & LOGO GRID ──────────────────────── */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#111111] leading-tight">
              Launch &amp; Growth Solutions
            </h2>

            {/* Department Intro */}
            <p className="text-base sm:text-lg text-zinc-700 font-normal leading-relaxed max-w-xl">
              Our Growth &amp; Scale department specializes in implementing and managing data-driven marketing strategies to transform your innovative ideas into market-leading brands. We focus on increasing your brand awareness, market share, and long-term business revenue.
            </p>

            {/* Solid Black Underline Divider */}
            <div className="w-24 h-[2.5px] bg-black" />

            {/* Collaboration Subheading */}
            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 leading-snug max-w-xl">
              Proud to be collaborating with marketplace and industry leaders to power growth for D2C brands!
            </h3>

            {/* Partner Logo Grid (3 columns, 2 rows matching user specifications) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-10 pt-4 items-center max-w-2xl">
              
              {/* Row 1, Col 1: Meta Business Partner */}
              <div className="flex items-center justify-start sm:justify-center h-16">
                <MetaPartnerLogo />
              </div>

              {/* Row 1, Col 2: Google Partner */}
              <div className="flex items-center justify-start sm:justify-center h-16">
                <GooglePartnerBadge />
              </div>

              {/* Row 1, Col 3: Amazon */}
              <div className="flex items-center justify-start sm:justify-center h-16">
                <AmazonLogo />
              </div>

              {/* Row 2, Col 1: Flipkart */}
              <div className="flex items-center justify-start sm:justify-center h-16">
                <FlipkartLogo />
              </div>

              {/* Row 2, Col 2: Nykaa */}
              <div className="flex items-center justify-start sm:justify-center h-16">
                <NykaaLogo />
              </div>

              {/* Row 2, Col 3: ONDC */}
              <div className="flex items-center justify-start sm:justify-center h-16">
                <ONDCLogo />
              </div>

            </div>
          </div>

          {/* ── RIGHT COLUMN: ACCORDION LIST ─────────────────────────────────── */}
          <div className="lg:col-span-5 w-full pt-2 lg:pt-4 text-left">
            <div className="border-t border-zinc-200 divide-y divide-zinc-200">
              {MEDIA_SOLUTIONS.map((item) => {
                const isOpen = openAccordion === item.id;

                return (
                  <div key={item.id} className="py-5 sm:py-6">
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full flex items-center justify-between text-left group cursor-pointer"
                    >
                      <span className="text-lg sm:text-xl font-bold text-zinc-900 group-hover:text-[#FF5722] transition-colors tracking-tight">
                        {item.title}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-1 text-zinc-500 group-hover:text-black shrink-0 ml-4"
                      >
                        <ChevronDown size={20} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1, marginTop: 14 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          className="overflow-hidden space-y-4"
                        >
                          <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                            {item.description}
                          </p>

                          {/* Capabilities List */}
                          <div className="space-y-2 pt-1">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF5722] block">
                              Execution Stack:
                            </span>
                            <ul className="space-y-1.5">
                              {item.capabilities.map((cap, i) => (
                                <li key={i} className="text-xs text-zinc-700 flex items-center gap-2">
                                  <CheckCircle2 size={13} className="text-black shrink-0" />
                                  <span>{cap}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* CTA Link */}
                          <div className="pt-2">
                            <Link
                              to={item.linkUrl}
                              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black hover:text-[#FF5722] underline underline-offset-4 transition-colors"
                            >
                              <span>Consult Our Growth &amp; Scale Team</span>
                              <ArrowRight size={13} />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MediaSolutionsSection;
