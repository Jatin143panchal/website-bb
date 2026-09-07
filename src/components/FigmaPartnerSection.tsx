import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface PartnerItem {
  id: string;
  name: string;
  category: string;
  title: string;
  description: string;
  logo: React.ReactNode;
}

// Crisp Vector Logos matching reference screenshot
const ONDCLogo = () => (
  <div className="flex flex-col items-center justify-center">
    <div className="flex items-center gap-1.5">
      <span className="text-3xl sm:text-4xl font-black tracking-tighter text-[#333333] font-sans">
        ON<span className="text-[#008BD2]">D</span>C
      </span>
    </div>
    <span className="text-[9px] sm:text-[10px] uppercase font-semibold text-zinc-400 tracking-wider mt-0.5">
      Open Network for Digital Commerce
    </span>
  </div>
);

const GooglePartnerBadge = () => (
  <div className="flex flex-col items-center justify-center p-3 border border-zinc-200 rounded-md bg-white shadow-2xs w-36 sm:w-40 text-center">
    <div className="flex items-center justify-center gap-1 mb-0.5">
      <span className="text-xl font-black text-[#4285F4]">G</span>
      <span className="text-xs font-bold text-zinc-700 tracking-tight">Google Partner</span>
    </div>
    <div className="w-full bg-[#3C4043] text-white text-[9px] font-bold uppercase tracking-wider py-0.5 px-2 rounded-xs mt-1">
      PREMIER 2024
    </div>
  </div>
);

const ZohoAuthorizedBadge = () => (
  <div className="flex flex-col items-center justify-center text-center">
    <div className="flex items-center gap-0.5 mb-0.5">
      <span className="px-1.5 py-0.5 bg-[#E42528] text-white font-black text-sm rounded-xs">Z</span>
      <span className="px-1.5 py-0.5 bg-[#089949] text-white font-black text-sm rounded-xs">O</span>
      <span className="px-1.5 py-0.5 bg-[#F8AE1B] text-white font-black text-sm rounded-xs">H</span>
      <span className="px-1.5 py-0.5 bg-[#1788CA] text-white font-black text-sm rounded-xs">O</span>
    </div>
    <span className="text-base sm:text-lg font-bold text-zinc-800 tracking-tight block">
      Authorized
    </span>
    <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest block">
      Partner
    </span>
  </div>
);

const MoengageLogo = () => (
  <div className="flex items-center justify-center">
    <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A] font-sans lowercase flex items-center">
      moengage
      <span className="w-2 h-2 rounded-full bg-[#1A1A1A] ml-0.5 mb-2 inline-block" />
    </span>
  </div>
);

const AdobeSolutionBadge = () => (
  <div className="flex flex-col items-center justify-center text-center">
    <div className="flex items-center gap-1 mb-0.5">
      <span className="text-lg font-black text-[#EB1000] tracking-tight">Adobe</span>
    </div>
    <span className="text-sm font-bold text-zinc-800 tracking-tight block">
      Solution Partner
    </span>
    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">
      BRONZE / D2C
    </span>
  </div>
);

const NodejsLogo = () => (
  <div className="flex items-center justify-center gap-1.5">
    <svg viewBox="0 0 100 60" className="w-10 h-7 fill-[#539E43]">
      <path d="M50 0 L90 23 L90 69 L50 92 L10 69 L10 23 Z" fill="#539E43" />
      <path d="M50 18 L76 33 L76 63 L50 78 L24 63 L24 33 Z" fill="white" />
    </svg>
    <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#333333]">
      node<span className="text-[#539E43]">.js</span>
    </span>
  </div>
);

const AmazonSPNBadge = () => (
  <div className="flex flex-col items-center justify-center text-center">
    <span className="text-2xl sm:text-3xl font-black text-[#111111] tracking-tight">
      amazon<span className="text-[#FF9900]">.in</span>
    </span>
    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mt-0.5">
      SERVICE PROVIDER NETWORK
    </span>
  </div>
);

const ShopifyPlusBadge = () => (
  <div className="flex items-center justify-center gap-2 text-center">
    <svg viewBox="0 0 100 115" className="w-8 h-9 fill-[#95BF47]">
      <path d="M78 18 C77 18 76 19 75 19 L66 12 C64 9 60 7 56 8 L54 3 C53 1 51 0 49 0 L40 3 C38 4 36 6 35 8 L33 13 C29 14 25 17 23 20 L2 36 C1 37 0 39 0 41 L12 110 C12 113 15 115 18 115 L82 115 C85 115 88 113 88 110 L100 41 C100 39 99 37 98 36 Z" />
    </svg>
    <div className="text-left">
      <span className="text-xl sm:text-2xl font-black text-[#111111] leading-none block">
        shopify<span className="text-[#95BF47]">plus</span>
      </span>
      <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block mt-0.5">
        PARTNER
      </span>
    </div>
  </div>
);

const QuickCommerceBadge = () => (
  <div className="flex flex-col items-center justify-center text-center">
    <div className="flex items-center gap-2">
      <span className="text-xl sm:text-2xl font-black text-[#F8CB46] tracking-tight bg-black px-2 py-0.5 rounded-sm">
        blink<span className="text-[#0C831F]">it</span>
      </span>
      <span className="text-xs font-black text-zinc-400">&amp;</span>
      <span className="text-xl sm:text-2xl font-black text-[#7526D6] tracking-tight">
        zepto
      </span>
    </div>
    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mt-1">
      QUICK COMMERCE DISTRIBUTION
    </span>
  </div>
);

const PARTNERS_LIST: PartnerItem[] = [
  {
    id: 'ondc',
    name: 'ONDC',
    category: 'E-Commerce Infrastructure',
    title: 'ONDC Partner',
    description: 'Complete e-commerce solutions to meet your business goals.',
    logo: <ONDCLogo />,
  },
  {
    id: 'google',
    name: 'Google Partner',
    category: 'Performance Marketing',
    title: 'Google Premier Partner',
    description: 'Leverage the power of Google Ads to scale your business.',
    logo: <GooglePartnerBadge />,
  },
  {
    id: 'zoho',
    name: 'Zoho',
    category: 'Enterprise ERP',
    title: 'Zoho Premium Partner',
    description: 'Design and implement integrated business architectures and digital transformation solutions.',
    logo: <ZohoAuthorizedBadge />,
  },
  {
    id: 'moengage',
    name: 'MoEngage',
    category: 'Customer Retention',
    title: 'MoEngage Growth Partner',
    description: 'Drive automated customer engagement, lifecycle journeys, and retention for D2C brands.',
    logo: <MoengageLogo />,
  },
  {
    id: 'adobe',
    name: 'Adobe',
    category: 'Creative Cloud & D2C',
    title: 'Adobe Solution Partner',
    description: 'Deliver personalized digital storefront experiences and high-converting creative design assets.',
    logo: <AdobeSolutionBadge />,
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Full-Stack Architecture',
    title: 'Headless Commerce Architecture',
    description: 'High-performance headless backend architectures and real-time factory inventory systems.',
    logo: <NodejsLogo />,
  },
  {
    id: 'amazon',
    name: 'Amazon SPN',
    category: 'Marketplace Dominance',
    title: 'Amazon SPN & Launchpad Partner',
    description: 'Priority catalog onboarding, A+ brand content, and marketplace Buy Box dominance.',
    logo: <AmazonSPNBadge />,
  },
  {
    id: 'shopify',
    name: 'Shopify Plus',
    category: 'Omnichannel Storefronts',
    title: 'Shopify Plus Partner',
    description: 'Design and deploy luxury custom storefronts with frictionless checkout and international scale.',
    logo: <ShopifyPlusBadge />,
  },
  {
    id: 'quick-commerce',
    name: 'Blinkit & Zepto',
    category: 'Instant 10-Min Commerce',
    title: 'Quick Commerce Launch Partner',
    description: '10-minute dark store inventory onboarding across 35+ major metros for immediate traction.',
    logo: <QuickCommerceBadge />,
  },
];

export const FigmaPartnerSection: React.FC = () => {
  return (
    <section 
      id="partnerships"
      className="w-full bg-white py-20 sm:py-28 md:py-36 px-4 sm:px-8 lg:px-16 select-none border-b border-zinc-100"
      style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto space-y-16 sm:space-y-24">
        
        {/* ── HEADER WITH ASYMMETRIC DOT BULLET MATCHING SCHBANG REFERENCE ── */}
        <div className="space-y-4 text-left max-w-5xl">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-black shrink-0" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
              OUR PARTNERSHIPS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-[#111111] leading-tight">
            Proudly Collaborating With The Most Cutting-Edge Platforms In The Industry
          </h2>
        </div>

        {/* ── 3-COLUMN LOGO & TEXT GRID MATCHING REFERENCE SCREENSHOT ────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-16 sm:gap-y-20 items-start">
          {PARTNERS_LIST.map((partner) => (
            <div
              key={partner.id}
              className="flex flex-col items-center text-center space-y-6 group"
            >
              {/* Partner Logo Slot */}
              <div className="h-28 sm:h-32 w-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                {partner.logo}
              </div>

              {/* Text Information Below Logo */}
              <div className="space-y-2 max-w-sm mx-auto">
                <h3 className="text-base sm:text-lg font-bold text-[#111111] tracking-tight">
                  {partner.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 font-normal leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FigmaPartnerSection;
