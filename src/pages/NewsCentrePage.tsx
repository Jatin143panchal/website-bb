import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ArrowUpRight, 
  Calendar, 
  Clock, 
  Share2, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { FigmaFooter } from '../components/FigmaFooter';

interface NewsItem {
  id: string;
  category: 'press' | 'media';
  title: string;
  publication: string;
  publicationBadgeText: string;
  badgeBg: string;
  badgeTextColor: string;
  date: string;
  readTime: string;
  image: string;
  alt: string;
  excerpt: string;
  fullContent: {
    intro: string;
    highlights: string[];
    paragraphs: string[];
    quote?: { text: string; author: string };
  };
}

const NEWS_ARTICLES: NewsItem[] = [
  {
    id: '1',
    category: 'media',
    title: 'Banega Brand launches winter chai campaign in North India',
    publication: 'Brand Equity',
    publicationBadgeText: 'BE',
    badgeBg: 'bg-[#FF3E6C]',
    badgeTextColor: 'text-white',
    date: 'February 2026',
    readTime: '3 min read',
    image: '/assets/news/chai_campaign.jpg',
    alt: 'Banega Brand Winter Chai Campaign',
    excerpt: 'The narrative-led outdoor and digital campaign captured peak morning commuter mindshare across Delhi NCR, Chandigarh, and Lucknow.',
    fullContent: {
      intro: 'In a bold move blending experiential digital storytelling and high-velocity retail sampling, Banega Brand unveiled its winter beverage campaign across key North Indian metros.',
      highlights: [
        'Over 18 million digital impressions generated in the first 72 hours of launch.',
        'Seamless integration with quick commerce partners including Blinkit and Zepto for instant delivery.',
        'Custom heritage packaging and vacuum-sealed aroma retention formulations developed in-house.',
      ],
      paragraphs: [
        'The campaign spotlighted the sensory nostalgia of Indian morning commutes, utilizing scenic mountain railway imagery and authentic consumer interactions.',
        'With precision ad placement across YouTube, Instagram Reels, and high-footfall metro stations, the campaign achieved an unprecedented 4.6x ROAS for partner brands in week one.',
      ],
      quote: {
        text: 'Our objective was to cut through algorithmic noise and build an authentic emotional resonance with everyday consumers.',
        author: 'Mayank Tiwari, Founder & Chief Strategist at Banega Brand',
      },
    },
  },
  {
    id: '2',
    category: 'media',
    title: "At India's AI summit, two tech giants wouldn't align. Banega Brand seized the moment",
    publication: 'Afaqs!',
    publicationBadgeText: 'afaqs!',
    badgeBg: 'bg-[#E31B23]',
    badgeTextColor: 'text-white',
    date: 'January 2026',
    readTime: '4 min read',
    image: '/assets/news/summit_moment.jpg',
    alt: 'India AI & D2C Innovation Summit',
    excerpt: 'How real-time AI formulation compounding and rapid 45-day go-to-market execution stole the spotlight at Mumbai’s premier tech summit.',
    fullContent: {
      intro: 'While keynote panelists debated theoretical timelines for generative AI adoption in consumer products, Banega Brand demonstrated live automated batch economics and olfactory note generation directly from the summit floor.',
      highlights: [
        'Live demonstration of Banega Brand’s AI Formulation & Note Architecture suite.',
        'On-the-spot compounding feasibility calculations for prospective cosmetic and fragrance founders.',
        'Over 40 new D2C brand onboarding partnerships signed during the two-day summit.',
      ],
      paragraphs: [
        'The keynote session delivered by Mayank Tiwari highlighted how legacy FMCG giants take 18 to 24 months to bring a new SKU to shelf, whereas Banega Brand’s agile framework achieves full production and Nykaa/Amazon listing in just 45 to 90 days.',
        'Industry analysts praised the practical execution layer that bridges laboratory research, GMP factories, and digital omnichannel marketing.',
      ],
      quote: {
        text: 'The future belongs to agile consumer brands that move fast, maintain clinical formula purity, and command strong emotional loyalty.',
        author: 'Mayank Tiwari at AI & D2C Innovation Summit',
      },
    },
  },
  {
    id: '3',
    category: 'media',
    title: "Banega Brand's FMCG division launches 'Snacking Ka New Angle'",
    publication: 'Impact Magazine',
    publicationBadgeText: 'IMPACT',
    badgeBg: 'bg-[#0072CE]',
    badgeTextColor: 'text-white',
    date: 'November 2025',
    readTime: '5 min read',
    image: '/assets/news/snacking_campaign.jpg',
    alt: 'Snacking Ka New Angle Campaign',
    excerpt: 'A vibrant omnichannel campaign redefining healthy dairy snacking and artisan cheese packaging for modern Indian families.',
    fullContent: {
      intro: 'Targeting health-conscious millennial parents, the campaign introduces convenient triangular snack packs engineered with clean dairy formulations and high shelf-life stability.',
      highlights: [
        'Dermatologist & nutritionist tested clean label formulation with zero artificial preservatives.',
        'Distinctive geometric packaging designed for high shelf visibility and lunchbox convenience.',
        'Ranked #1 in New Releases in Dairy & Gourmet Snacks on Amazon India within 10 days.',
      ],
      paragraphs: [
        'The campaign features heartwarming, relatable domestic moments that highlight wholesome snacking without compromising on taste or nutritional density.',
        'Banega Brand oversaw the entire end-to-end launch journey: from clean cold-chain compounding and food regulatory clearances to marketplace onboarding and creative ad production.',
      ],
      quote: {
        text: 'We designed the packaging and formulation so that mothers never have to choose between nutrition and pure indulgence.',
        author: 'Lead Formulator & Product Architect at Banega Brand',
      },
    },
  },
  {
    id: '4',
    category: 'press',
    title: 'Banega Brand Crosses ₹120Cr+ In Cumulative Client GMV Across Amazon, Nykaa & Shopify',
    publication: 'Economic Times',
    publicationBadgeText: 'ET',
    badgeBg: 'bg-[#0A2540]',
    badgeTextColor: 'text-white',
    date: 'August 2026',
    readTime: '4 min read',
    image: '/assets/Banner 1.png',
    alt: 'Banega Brand Milestone Growth',
    excerpt: 'Turnkey product launch infrastructure empowers 215+ consumer founders to capture market share from legacy FMCG conglomerates.',
    fullContent: {
      intro: 'India’s leading physical product launch company announced a milestone ₹120 Crore in cumulative gross merchandise value generated across its portfolio of private label brands.',
      highlights: [
        '215+ active product launches across Perfume, Cosmetics, Ayurveda, and Skincare.',
        'Network of 40+ audited GMP and ISO-certified contract manufacturing partner labs.',
        'Average launch timeline maintained at 45–90 days from initial formulation brief.',
      ],
      paragraphs: [
        'The rapid growth reflects strong domestic demand for high-margin, narrative-driven physical products created by independent Indian founders.',
        'With direct integrations into quick commerce dark stores and major D2C marketplaces, Banega Brand has established itself as the go-to launch powerhouse.',
      ],
      quote: {
        text: 'We are building the infrastructure that makes launching a premium physical product as frictionless as launching software.',
        author: 'Mayank Tiwari, Founder',
      },
    },
  },
  {
    id: '5',
    category: 'press',
    title: 'Banega Brand Expands GMP Partner Lab Network with 15 New Fragrance & Skincare Hubs',
    publication: 'Inc42',
    publicationBadgeText: 'Inc42',
    badgeBg: 'bg-[#FF4500]',
    badgeTextColor: 'text-white',
    date: 'July 2026',
    readTime: '3 min read',
    image: '/assets/Banner 3.png',
    alt: 'Banega Brand Manufacturing Expansion',
    excerpt: 'New testing facilities in Baddi and Ahmedabad add high-concentration perfume maceration tanks and ISO 22716 clean rooms.',
    fullContent: {
      intro: 'To meet escalating demand for luxury Eau De Parfum and clinical skincare formulations, Banega Brand has added 15 specialized manufacturing partner facilities to its audited ecosystem.',
      highlights: [
        'High-capacity French & Middle Eastern perfume oil blending units.',
        'In-house microbiology, heavy metals, and 24-month stability challenge testing chambers.',
        'Dedicated low-MOQ pilot production lines for early-stage startup founders.',
      ],
      paragraphs: [
        'This expansion significantly reduces production lead times and provides emerging entrepreneurs access to tier-1 manufacturing quality previously reserved for multi-billion-dollar conglomerates.',
      ],
      quote: {
        text: 'Every founder deserves world-class formulation rigor and laboratory precision right from batch number one.',
        author: 'Operations Director, Banega Brand',
      },
    },
  },
  {
    id: '6',
    category: 'press',
    title: 'The 45-Day Speed-to-Market Blueprint: How D2C Brands Are Winning on Quick Commerce',
    publication: 'YourStory',
    publicationBadgeText: 'YS',
    badgeBg: 'bg-[#E53E3E]',
    badgeTextColor: 'text-white',
    date: 'June 2026',
    readTime: '5 min read',
    image: '/assets/Banner 2.png',
    alt: 'Quick Commerce Launch Strategy',
    excerpt: 'Why rapid formulation-to-shelf speed is deciding the ultimate category winners on Blinkit, Zepto, and Instamart.',
    fullContent: {
      intro: 'An in-depth analysis of supply chain decentralization, contract compounding hubs, and the quick-commerce explosion transforming Indian consumer habits.',
      highlights: [
        'Dark store inventory optimization strategies for instant 10-minute delivery.',
        'Packaging durability standards engineered specifically for quick-commerce transit.',
        'Case studies of brands achieving ₹10 Lakhs+ in daily sales within their first month.',
      ],
      paragraphs: [
        'Speed is no longer just an operational advantage; it is the fundamental moat for consumer brands in the post-e-commerce era.',
      ],
      quote: {
        text: 'If you take 18 months to launch, the trend is already dead. Agility is the ultimate competitive advantage.',
        author: 'Mayank Tiwari',
      },
    },
  },
];

export const NewsCentrePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'media' | 'press'>('media');
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  const filteredArticles = NEWS_ARTICLES.filter((item) => item.category === activeTab);

  return (
    <div 
      className="relative bg-white text-[#111111] selection:bg-[#FF5722] selection:text-white min-h-screen font-sans overflow-x-hidden pt-20 sm:pt-24"
      style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
    >
      <Helmet>
        <title>News Centre | Banega Brand In The News</title>
        <meta 
          name="description" 
          content="Explore Banega Brand in the news, press releases, media coverage, and landmark physical product launch dispatches." 
        />
        <link rel="canonical" href="https://banegabrand.com/news-centre" />
      </Helmet>

      <Navbar />

      <main className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 max-w-[1440px] mx-auto select-none">
        
        {/* ── TOP HEADER WITH ASYMMETRIC DOT BULLET ────────────────────────── */}
        <div className="text-center mb-10 sm:mb-14 flex flex-col items-center justify-center relative">
          <div className="relative inline-block">
            {/* Top-left dot accent */}
            <span className="absolute -top-3 -left-4 sm:-top-4 sm:-left-6 w-2.5 h-2.5 rounded-full bg-[#111111]" />
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
              Banega Brand In The News
            </h1>
          </div>
        </div>

        {/* ── FILTER BUTTONS BAR (ALIGNMENT MATCHING REFERENCE SCREENSHOT) ── */}
        <div className="flex items-center justify-end gap-3 pb-5 border-b border-zinc-200">
          <button
            onClick={() => setActiveTab('press')}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === 'press'
                ? 'bg-[#111111] text-white shadow-xs'
                : 'bg-white text-zinc-700 border border-zinc-300 hover:border-black'
            }`}
          >
            Press Releases
          </button>

          <button
            onClick={() => setActiveTab('media')}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === 'media'
                ? 'bg-[#111111] text-white shadow-xs'
                : 'bg-white text-zinc-700 border border-zinc-300 hover:border-black'
            }`}
          >
            Media Features
          </button>
        </div>

        {/* ── 3-COLUMN NEWS CARDS GRID MATCHING REFERENCE SCREENSHOT ──────── */}
        <div className="pt-10 sm:pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedArticle(article)}
              className="group flex flex-col space-y-4 cursor-pointer text-left"
            >
              {/* Image Container with Top-Right Publication Badge */}
              <div className="relative w-full aspect-[16/10] bg-zinc-100 rounded-2xl overflow-hidden shadow-2xs group-hover:shadow-md transition-shadow">
                <img
                  src={article.image}
                  alt={article.alt}
                  className="w-full h-full object-cover object-center filter brightness-[0.98] transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating Top-Right Circular Publication Badge */}
                <div className="absolute top-3.5 right-3.5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center p-1 border border-zinc-100">
                  <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${article.badgeBg} ${article.badgeTextColor} font-black text-[9px] sm:text-[10px] flex items-center justify-center tracking-tighter uppercase text-center leading-none`}>
                    {article.publicationBadgeText}
                  </span>
                </div>
              </div>

              {/* Title Underneath Image */}
              <div className="space-y-1.5 pt-1">
                <h3 className="text-sm sm:text-base font-bold text-zinc-900 leading-snug group-hover:text-[#FF5722] transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-zinc-400 font-medium">
                  {article.publication} • {article.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </main>

      {/* ── INTERACTIVE WORKING ARTICLE READER MODAL ─────────────────────── */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-zinc-200 max-h-[85vh] overflow-y-auto text-left relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Publication Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`px-3 py-1 rounded-full ${selectedArticle.badgeBg} ${selectedArticle.badgeTextColor} text-[10px] font-black uppercase tracking-wider`}>
                  {selectedArticle.publication}
                </div>
                <span className="text-xs font-medium text-zinc-400">
                  {selectedArticle.date} • {selectedArticle.readTime}
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] leading-snug mb-6">
                {selectedArticle.title}
              </h2>

              {/* Image */}
              <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-zinc-100">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Body */}
              <div className="space-y-6 text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
                <p className="font-semibold text-zinc-900">
                  {selectedArticle.fullContent.intro}
                </p>

                {/* Bullet Highlights */}
                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF5722] block">
                    Key Highlights:
                  </span>
                  <ul className="space-y-2">
                    {selectedArticle.fullContent.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-800">
                        <CheckCircle2 size={16} className="text-[#FF5722] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedArticle.fullContent.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}

                {selectedArticle.fullContent.quote && (
                  <blockquote className="border-l-4 border-black pl-4 py-1 italic font-medium text-zinc-800 bg-zinc-50 rounded-r-xl p-3">
                    "{selectedArticle.fullContent.quote.text}"
                    <span className="block text-xs font-bold text-zinc-500 uppercase not-italic mt-2">
                      — {selectedArticle.fullContent.quote.author}
                    </span>
                  </blockquote>
                )}
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <Link
                  to="/contact"
                  onClick={() => setSelectedArticle(null)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-[#FF5722] transition-colors"
                >
                  <span>Launch Your Brand Story</span>
                  <ArrowUpRight size={14} />
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    if (navigator.clipboard) {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Article link copied to clipboard!');
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <Share2 size={14} />
                  <span>Share Dispatch</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <FigmaFooter />
    </div>
  );
};

export default NewsCentrePage;
