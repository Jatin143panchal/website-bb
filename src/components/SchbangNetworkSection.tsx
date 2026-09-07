import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NetworkPartner {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  capabilities: string[];
  linkText: string;
  linkUrl: string;
  logoSvg: React.ReactNode;
}

// Pixel-perfect vector logos matching the reference screenshot
const SpekLogo = () => (
  <div className="flex items-center gap-3">
    {/* Interlocking S ribbon icon */}
    <svg viewBox="0 0 60 90" className="w-10 h-16 fill-none stroke-black stroke-[8] stroke-linecap-round stroke-linejoin-round">
      <path d="M45 15 C45 8, 38 5, 28 5 C15 5, 8 16, 8 28 C8 42, 52 48, 52 62 C52 74, 45 85, 32 85 C22 85, 15 82, 15 75" />
      <path d="M15 75 C15 82, 22 85, 32 85 C45 85, 52 74, 52 62 C52 48, 8 42, 8 28 C8 16, 15 5, 28 5 C38 5, 45 8, 45 15" />
    </svg>
    <div className="flex flex-col text-left">
      <span className="text-3xl sm:text-4xl font-black tracking-tight text-black font-sans leading-none">
        SP<span className="tracking-tighter">E</span>K<span className="text-[#FF5722]">!</span>
      </span>
      <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-zinc-500 mt-1">
        Creative Performance Marketing
      </span>
    </div>
  </div>
);

const EightyEightGBLogo = () => (
  <div className="flex items-center justify-center">
    <svg viewBox="0 0 160 120" className="w-24 sm:w-28 h-16 sm:h-20 fill-black">
      {/* 88 geometric overlapping circles */}
      <circle cx="35" cy="40" r="22" />
      <circle cx="35" cy="80" r="22" />
      <circle cx="75" cy="40" r="22" />
      <circle cx="75" cy="80" r="22" />
      {/* Inner white cutouts for 88 */}
      <circle cx="35" cy="40" r="10" fill="white" />
      <circle cx="35" cy="80" r="10" fill="white" />
      <circle cx="75" cy="40" r="10" fill="white" />
      <circle cx="75" cy="80" r="10" fill="white" />
      {/* GB typography */}
      <path d="M105 30 L105 90 L135 90 L135 70 L120 70 L120 50 L135 50 L135 30 Z" />
      <path d="M140 30 L140 90 L158 90 C165 90 170 82 170 75 C170 68 165 62 155 60 C162 58 166 52 166 45 C166 38 162 30 152 30 Z" />
    </svg>
  </div>
);

const DjangoLogo = () => (
  <div className="flex items-center gap-2">
    <span className="text-5xl sm:text-6xl font-black text-black font-sans leading-none tracking-tighter">
      D
    </span>
    <div className="flex flex-col text-left font-sans font-black leading-none uppercase tracking-tight text-black">
      <span className="text-2xl sm:text-3xl tracking-tight">JANGO</span>
      <span className="text-2xl sm:text-3xl tracking-tight mt-0.5">IGITAL</span>
    </div>
  </div>
);

const ARTmeTechLogo = () => (
  <div className="flex items-center justify-center">
    {/* Geometric interlocking polygon M logo */}
    <svg viewBox="0 0 160 80" className="w-28 sm:w-32 h-14 sm:h-16 fill-none stroke-zinc-700 stroke-[10] stroke-linejoin-miter">
      <path d="M10 70 L45 15 L80 70 L115 15 L150 70" />
      <path d="M45 70 L80 15 L115 70" stroke="#333" strokeWidth="6" />
    </svg>
  </div>
);

const NETWORK_PARTNERS: NetworkPartner[] = [
  {
    id: 'spek',
    name: 'SPEK Digital',
    shortDesc: 'Creative Performance Marketing & D2C Growth Engineering',
    fullDesc: 'SPEK Digital specializes in high-octane performance marketing, meta ad creative storytelling, full-funnel media buying, and CRO for emerging D2C and FMCG brands. Their proprietary analytics framework scales brands from initial launch to ₹5Cr+ monthly recurring GMV.',
    capabilities: [
      'High-converting UGC video production & ad creative sprints',
      'Meta, Google & TikTok multi-channel media planning',
      'D2C checkout conversion rate optimization (CRO)',
      'Customer lifetime value (LTV) and retention modeling',
    ],
    linkText: 'Explore SPEK Performance Stack',
    linkUrl: '/contact',
    logoSvg: <SpekLogo />,
  },
  {
    id: '88gb',
    name: '88GB',
    shortDesc: 'Brand Identity, Packaging Design & CGI 3D Renders',
    fullDesc: '88GB is a creative boutique studio engineered to deliver ultra-luxury aesthetic systems. From custom glass mould 3D CAD modeling and embossed mono-cartons to bold visual identity playbooks that command premium retail shelf presence.',
    capabilities: [
      'Custom luxury perfume flacon & skincare bottle 3D modeling',
      'FSC-certified sustainable packaging & embossing specifications',
      'Brand naming, trademark positioning & sensory brand books',
      'Hyper-realistic CGI photorealistic product renders for ecommerce',
    ],
    linkText: 'View 88GB Creative Portfolio',
    linkUrl: '/contact',
    logoSvg: <EightyEightGBLogo />,
  },
  {
    id: 'django',
    name: 'Django Digital',
    shortDesc: 'Full-Funnel Influencer Strategy & Viral PR Campaigns',
    fullDesc: 'Django Digital orchestrates cultural conversations. By pairing tier-1 beauty influencers, dermats, and lifestyle creators with algorithmic seeding, Django creates nationwide awareness that sells out inventory within weeks of product launch.',
    capabilities: [
      '1,000+ pre-vetted beauty, dermat & lifestyle creator network',
      'Tier-1 lifestyle press placements & celebrity seeding gifting',
      'Trend-jacking & viral Instagram / YouTube Shorts distribution',
      'Event curation, launch parties & experiential retail activations',
    ],
    linkText: 'Discover Django PR Engine',
    linkUrl: '/contact',
    logoSvg: <DjangoLogo />,
  },
  {
    id: 'artmetech',
    name: 'ARTmeTech',
    shortDesc: 'Laboratory Compounding Tech & Quality Assurance Systems',
    fullDesc: 'ARTmeTech bridges biotechnology and physical manufacturing. Their proprietary QA and batch-tracking algorithms monitor stability, microbiological purity, and regulatory compliance across 40+ contract partner labs across India.',
    capabilities: [
      'Automated batch analytics & IFRA/AYUSH ingredient validation',
      '24-month stability challenge testing & oxidation tracking',
      'Real-time factory supply chain telemetry & MOQ optimization',
      'Custom formulation copyright security and chemical IP vaults',
    ],
    linkText: 'Connect With ARTmeTech Labs',
    linkUrl: '/contact',
    logoSvg: <ARTmeTechLogo />,
  },
];

export const SchbangNetworkSection: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>('spek');

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <section 
      id="banegabrand-network"
      className="w-full bg-white text-[#111111] py-20 sm:py-28 md:py-36 px-4 sm:px-8 lg:px-16 select-none border-b border-zinc-100"
      style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* ── LEFT COLUMN: TITLE, SUBTITLE & 2x2 / 3x2 LOGO GRID ───────────── */}
          <div className="lg:col-span-7 space-y-12 text-left">
            
            {/* Header with black dot accent */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-black shrink-0" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
                  ECOSYSTEM &amp; ALLIANCES
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#111111] leading-tight">
                Banega Brand Network &amp; Partnerships
              </h2>

              <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-xl">
                Our partner companies like SPEK Digital, 88GB, Django Digital, and ARTmeTech cater to unique market needs across creative performance, luxury packaging, viral PR, and laboratory compounding.
              </p>
            </div>

            {/* Clean Logo Grid Matching Reference Screenshot */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 pt-4 items-center">
              
              {/* Logo 1: SPEK! */}
              <div 
                onClick={() => setOpenAccordion('spek')}
                className={`p-6 rounded-2xl border transition-all duration-300 flex items-center justify-center min-h-[140px] cursor-pointer ${
                  openAccordion === 'spek' 
                    ? 'border-black bg-zinc-50 shadow-xs' 
                    : 'border-transparent hover:border-zinc-200'
                }`}
              >
                <SpekLogo />
              </div>

              {/* Logo 2: 88GB */}
              <div 
                onClick={() => setOpenAccordion('88gb')}
                className={`p-6 rounded-2xl border transition-all duration-300 flex items-center justify-center min-h-[140px] cursor-pointer ${
                  openAccordion === '88gb' 
                    ? 'border-black bg-zinc-50 shadow-xs' 
                    : 'border-transparent hover:border-zinc-200'
                }`}
              >
                <EightyEightGBLogo />
              </div>

              {/* Logo 3: DJANGO DIGITAL */}
              <div 
                onClick={() => setOpenAccordion('django')}
                className={`p-6 rounded-2xl border transition-all duration-300 flex items-center justify-center min-h-[140px] cursor-pointer ${
                  openAccordion === 'django' 
                    ? 'border-black bg-zinc-50 shadow-xs' 
                    : 'border-transparent hover:border-zinc-200'
                }`}
              >
                <DjangoLogo />
              </div>

              {/* Logo 4: ARTmeTech */}
              <div 
                onClick={() => setOpenAccordion('artmetech')}
                className={`p-6 rounded-2xl border transition-all duration-300 flex items-center justify-center min-h-[140px] cursor-pointer ${
                  openAccordion === 'artmetech' 
                    ? 'border-black bg-zinc-50 shadow-xs' 
                    : 'border-transparent hover:border-zinc-200'
                }`}
              >
                <ARTmeTechLogo />
              </div>

            </div>
          </div>

          {/* ── RIGHT COLUMN: CLEAN ACCORDION LIST MATCHING SCREENSHOT ───────── */}
          <div className="lg:col-span-5 w-full pt-2 lg:pt-8 text-left">
            <div className="border-t border-zinc-200 divide-y divide-zinc-200">
              {NETWORK_PARTNERS.map((partner) => {
                const isOpen = openAccordion === partner.id;

                return (
                  <div key={partner.id} className="py-5 sm:py-6">
                    <button
                      onClick={() => toggleAccordion(partner.id)}
                      className="w-full flex items-center justify-between text-left group cursor-pointer"
                    >
                      <span className="text-base sm:text-lg font-bold text-zinc-900 group-hover:text-[#FF5722] transition-colors tracking-tight">
                        {partner.name}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-1 text-zinc-500 group-hover:text-black shrink-0 ml-4"
                      >
                        <ChevronDown size={18} />
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
                            {partner.fullDesc}
                          </p>

                          {/* Capabilities List */}
                          <div className="space-y-2 pt-1">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF5722] block">
                              Core Capabilities:
                            </span>
                            <ul className="space-y-1.5">
                              {partner.capabilities.map((cap, i) => (
                                <li key={i} className="text-xs text-zinc-700 flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                                  <span>{cap}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* CTA Link */}
                          <div className="pt-2">
                            <Link
                              to={partner.linkUrl}
                              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black hover:text-[#FF5722] underline underline-offset-4 transition-colors"
                            >
                              <span>{partner.linkText}</span>
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

export default SchbangNetworkSection;
