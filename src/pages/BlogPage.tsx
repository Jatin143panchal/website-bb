import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Sparkles, 
  Clock, 
  ArrowRight, 
  Search, 
  CheckCircle2, 
  X, 
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { MainFooter } from '../components/MainFooter';

interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  excerpt: string;
  targetKeywords: string[];
  h1: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      subheading?: string;
      body: string[];
      keyPoints?: string[];
    }[];
    faqs?: {
      q: string;
      a: string;
    }[];
  };
}

// ============================================================
// PRE-POPULATED HIGH-INTENT SEO / AEO / GEO ARTICLES CLUSTERS
// ============================================================
const DEFAULT_ARTICLES: BlogArticle[] = [
  {
    id: 'how-to-launch-a-product-in-india',
    slug: 'how-to-launch-a-product-in-india',
    title: 'How to Launch a Product in India: The 2026 Step-by-Step Founder’s Blueprint',
    category: 'Launch Strategy',
    readTime: '7 min read',
    author: 'Mayank Tiwari (Product Launch Expert)',
    date: '2026-08-15',
    excerpt: 'A comprehensive step-by-step masterclass on how to launch a consumer brand in India. From market validation and factory sourcing to D2C scale.',
    targetKeywords: [
      'Product Launch Company',
      'Product Launch Consultant',
      'Product Launch Services',
      'How to launch a product in India',
      'How to launch your own brand',
      'How to build a D2C brand'
    ],
    h1: 'How to Launch a Product in India: The Complete 6-Step Blueprint for Founders',
    content: {
      intro: 'Launching a successful consumer product brand in India requires far more than a good idea and a logo. In today’s competitive D2C landscape, over 90% of product launches fail due to unvalidated demand, poor manufacturer coordination, and lack of brand differentiation. This blueprint details the proven 6-step framework used by top product launch consultants to scale brands from ₹0 to ₹1Cr+ sustainably.',
      sections: [
        {
          heading: 'Step 1: Category Validation & Demand Mining',
          subheading: 'Stop building products based on assumptions.',
          body: [
            'Before committing capital into formulation or bulk inventory, successful founders validate their product-market fit. This involves competitor gap analysis, search intent volume verification, and consumer pain-point extraction across marketplaces like Amazon, Nykaa, and Quick Commerce.',
            'Working with a specialized product development company ensures you identify white spaces in high-growth industries like luxury perfumes, clean cosmetics, and functional Ayurveda.'
          ],
          keyPoints: [
            'Analyze top 10 competitors’ 1-star reviews to find unaddressed customer complaints.',
            'Verify monthly search volumes for primary keywords.',
            'Determine unit economics and gross margin viability (minimum 65-75% gross margin required for D2C).'
          ]
        },
        {
          heading: 'Step 2: Manufacturer Network & OEM Sourcing',
          subheading: 'Turn concepts into physical products without getting trapped in high MOQs.',
          body: [
            'Finding the right third-party or contract manufacturer in India is often the greatest bottleneck for first-time entrepreneurs. Sourcing verified OEM/ODM partners with GMP, ISO 9001, and FDA certifications ensures product consistency and prevents batch rejections.',
            'A qualified product launch consultant negotiates flexible Minimum Order Quantities (MOQs) so founders can launch pilot batches without excessive upfront capital.'
          ],
          keyPoints: [
            'Conduct physical factory audits before issuing purchase orders.',
            'Demand stability testing reports and raw ingredient certificates of analysis (COA).',
            'Supervise sample runs and benchmark formulations against international market leaders.'
          ]
        },
        {
          heading: 'Step 3: Luxury Structural Packaging & Brand Identity',
          subheading: 'A product gets noticed; a brand gets chosen.',
          body: [
            'Premium packaging is your first and most vital sales pitch. Whether you are launching a luxury perfume bottle with a magnetic cap or a minimalist skincare serum in UV-coated glass, custom structural design commands high pricing power.',
            'Your brand identity must incorporate cohesive typography, sensory unboxing aesthetics, and trademark protection to establish defensible market equity.'
          ]
        },
        {
          heading: 'Step 4: Regulatory Compliance & Trademark Protection',
          subheading: 'Ensure legal immunity before going live.',
          body: [
            'Every consumer product category in India requires strict statutory adherence. This includes Class 3/5 Trademark registrations, Legal Metrology declarations, EAN-13 barcodes, GST registration, and category-specific licenses (AYUSH for Ayurveda, CDSCO/State FDA for cosmetics).'
          ]
        },
        {
          heading: 'Step 5: Omnichannel Go-To-Market Execution',
          subheading: 'Activate high-velocity digital storefronts and marketplace distribution.',
          body: [
            'A successful product launch synchronizes Shopify digital storefronts with Amazon Brand Registry, quick commerce onboarding, performance ad funnels, and targeted influencer seeding to generate day-one momentum.'
          ]
        }
      ],
      faqs: [
        {
          q: 'What is the role of a product launch consultant?',
          a: 'A product launch consultant guides entrepreneurs through the entire lifecycle of launching a product—from market validation, formulation chemistry, and manufacturer sourcing to packaging design, regulatory licensing, and digital go-to-market scaling.'
        },
        {
          q: 'How long does it take to launch a brand in India?',
          a: 'With an organized framework like Banega Brand’s 6-step system, a brand can go from initial concept to live market sales in 45 to 60 days.'
        }
      ]
    }
  },
  {
    id: 'how-to-start-a-perfume-brand-in-india',
    slug: 'how-to-start-a-perfume-brand-in-india',
    title: 'How to Start a Perfume Brand in India: Formulation, Sourcing & Scaling',
    category: 'Perfume & Fragrance',
    readTime: '6 min read',
    author: 'Mayank Tiwari (Perfume Brand Consultant)',
    date: '2026-08-14',
    excerpt: 'The ultimate guide on how to start a luxury perfume and fragrance brand in India. Learn about oil concentration, custom bottles, and high-margin D2C sales.',
    targetKeywords: [
      'Perfume Brand Consultant',
      'Perfume business consultant',
      'How to start a perfume brand in India',
      'Private label perfume manufacturer',
      'Product Launch Company'
    ],
    h1: 'How to Start a Profitable Perfume Brand in India (From Fragrance Notes to Luxury Shelf)',
    content: {
      intro: 'The fragrance industry in India is experiencing unprecedented exponential growth. With consumer preferences shifting toward long-lasting, high-concentration Extrait de Parfum and luxury artisanal blends, building a private label perfume brand offers 75%+ profit margins. Here is how perfume business consultants engineer market-dominating fragrance brands.',
      sections: [
        {
          heading: '1. Defining Your Olfactory Identity and Concentration',
          body: [
            'Most mass-market perfumes in India fail because they use low oil concentrations (Eau de Toilette with only 5-10% fragrance load). For luxury positioning, you must formulate Eau de Parfum (EDP) with 18-25% oil load or Extrait de Parfum with 25-35% concentration.',
            'Work with certified master perfumers to design distinct top, heart, and base notes with exceptional sillage and longevity calibrated for the Indian climate.'
          ],
          keyPoints: [
            'Use IFRA (International Fragrance Association) certified fragrance oils.',
            'Formulate with cosmetic-grade denatured ethanol to prevent skin irritation.',
            'Allow proper maturation and maceration periods (minimum 3-4 weeks) for aroma stabilization.'
          ]
        },
        {
          heading: '2. Sourcing Luxury Glass Bottles, Crimp Pumps & Caps',
          body: [
            'In the fragrance world, bottle weight and tactile feel dictate perceived value. Source thick-base flint glass bottles, leak-proof crimped micro-spray pumps, and heavy zinc-alloy or magnetic zamac caps.',
            'Custom decoration techniques like frost coating, screen printing, and debossed gold hot-foil stamping immediately elevate your brand above generic market alternatives.'
          ]
        },
        {
          heading: '3. Legal Compliances for Perfume Manufacturing in India',
          body: [
            'Perfume manufacturing requires cosmetic manufacturing licensing under the Drugs and Cosmetics Act. If you are launching via third-party or loan license manufacturing, ensure your manufacturing partner possesses valid State FDA cosmetic drug licenses and pollution control clearances.'
          ]
        }
      ],
      faqs: [
        {
          q: 'How much investment is needed to start a perfume brand in India?',
          a: 'Starting a private label perfume brand typically requires between ₹3 Lakhs to ₹8 Lakhs for a pilot batch of 500 to 1,000 luxury units, including custom bottles, packaging, formulation, and initial marketing.'
        },
        {
          q: 'Why is Banega Brand the best perfume launch company in India?',
          a: 'Banega Brand provides end-to-end perfume launch solutions including master perfumer formulation, audited bottle glass sourcing, automated crimping facilities, luxury packaging, and D2C customer acquisition.'
        }
      ]
    }
  },
  {
    id: 'how-to-start-a-skincare-and-cosmetic-brand',
    slug: 'how-to-start-a-skincare-and-cosmetic-brand',
    title: 'How to Start a Skincare & Cosmetic Brand: Formulation, Lab GMP & Packaging',
    category: 'Skincare & Cosmetics',
    readTime: '8 min read',
    author: 'Mayank Tiwari (Cosmetic Brand Consultant)',
    date: '2026-08-12',
    excerpt: 'Detailed roadmap to launching a skincare, cosmetic, or personal care brand in India. Clean beauty formulations, CDSCO compliance, and lab testing.',
    targetKeywords: [
      'Cosmetic Brand Consultant',
      'Skincare Brand Consultant',
      'Cosmetic manufacturing consultant',
      'Skincare business consultant',
      'How to start a cosmetic brand in India',
      'How to start a skincare brand'
    ],
    h1: 'How to Start a Skincare & Cosmetic Brand in India: Complete Formulation & Launch Guide',
    content: {
      intro: 'The Indian beauty and personal care market is projected to surpass $30 billion. Modern consumers demand clinical efficacy, clean formulations, and aesthetic packaging. Whether you want to launch active-ingredient serums, peptide creams, lip tints, or body care, following a structured cosmetic development protocol is critical for long-term customer retention.',
      sections: [
        {
          heading: '1. Formulating for Efficacy and Clean Beauty Standards',
          body: [
            'Develop custom, dermatologically tested formulations free from parabens, sulphates, and harmful heavy metals. Balance active ingredients like Niacinamide, Salicylic Acid, Retinoids, and Hyaluronic Acid with soothing botanical extracts.',
            'Ensure all formulations undergo microbiological challenge testing, 90-day stability tests at varying temperatures, and compatibility testing with primary packaging.'
          ]
        },
        {
          heading: '2. Contract Manufacturing & Lab Selection',
          body: [
            'Partner with WHO-GMP and ISO 22716 certified cosmetic laboratories. Ensure the manufacturer operates cleanroom facilities and possesses state-of-the-art homogenizers, vacuum emulsifiers, and automated filling lines.'
          ]
        },
        {
          heading: '3. Packaging Selection That Protects Active Ingredients',
          body: [
            'Active skincare formulations oxidize quickly when exposed to air and UV light. Utilize amber or opaque glass droppers, airless vacuum pump bottles, and multi-layer laminate tubes to preserve formulation potency.'
          ]
        }
      ],
      faqs: [
        {
          q: 'Do I need my own manufacturing unit to launch a skincare brand?',
          a: 'No. Over 95% of leading D2C skincare brands use contract or third-party GMP manufacturing. Banega Brand connects you with audited cosmetic labs across India.'
        }
      ]
    }
  },
  {
    id: 'how-to-launch-an-ayurveda-brand-in-india',
    slug: 'how-to-launch-an-ayurveda-brand-in-india',
    title: 'How to Launch an Ayurveda Brand in India: AYUSH Licensing & Sourcing',
    category: 'Ayurveda & Wellness',
    readTime: '6 min read',
    author: 'Mayank Tiwari (Ayurveda Brand Consultant)',
    date: '2026-08-10',
    excerpt: 'Step-by-step guide to starting an Ayurvedic wellness and herbal brand in India. AYUSH approval, classical vs proprietary formulations, and modern branding.',
    targetKeywords: [
      'Ayurveda Brand Consultant',
      'Ayurvedic product development consultant',
      'How to launch an Ayurveda brand',
      'Private label consultant in India',
      'Brand development company in India'
    ],
    h1: 'How to Launch an Ayurveda Brand in India: AYUSH Compliance, Herbs & Modern Positioning',
    content: {
      intro: 'Ayurveda is experiencing a global renaissance as modern consumers embrace holistic wellness, adaptogenic herbs, and preventive healthcare. Learn how to navigate AYUSH licensing, standardize herbal extracts, and package ancient wisdom into contemporary luxury lifestyle brands.',
      sections: [
        {
          heading: '1. Classical vs. Proprietary Ayurvedic Formulations',
          body: [
            'Classical formulations adhere strictly to ancient texts like Charaka Samhita and Sushruta Samhita (e.g., Kumkumadi Tailam, Chyawanprash). Proprietary formulations combine traditional herbal extracts with modern functional delivery formats like effervescent tablets, gummies, and herbal serums.',
            'Proprietary formulations require formal clinical validation and submission to State AYUSH licensing authorities.'
          ]
        },
        {
          heading: '2. Standardized Herbal Extracts and Heavy Metal Testing',
          body: [
            'Standardization ensures consistent active compound percentages in every batch (e.g., 5% Withanolides in Ashwagandha, 20% Bacosides in Brahmi). Every batch must pass rigorous ICP-MS testing for heavy metals like lead, arsenic, and mercury.'
          ]
        }
      ]
    }
  },
  {
    id: 'how-to-find-a-product-manufacturer-in-india',
    slug: 'how-to-find-a-product-manufacturer-in-india',
    title: 'How to Find a Trusted Product Manufacturer in India (OEM / ODM Blueprint)',
    category: 'Manufacturing & Sourcing',
    readTime: '7 min read',
    author: 'Mayank Tiwari (Private Label Consultant)',
    date: '2026-08-08',
    excerpt: 'How to locate, evaluate, audit, and negotiate with third-party and OEM manufacturers in India. Protect your IP and lock in low MOQs.',
    targetKeywords: [
      'How to find a product manufacturer in India',
      'Private label consultant in India',
      'Product development company',
      'Product launch services',
      'Cosmetic manufacturing consultant'
    ],
    h1: 'How to Find and Evaluate Product Manufacturers in India: The OEM & Sourcing Guide',
    content: {
      intro: 'Your manufacturer is your foundational business partner. Choosing the wrong supplier can lead to toxic batch inconsistencies, supply chain delays, and catastrophic brand reputational damage. Follow our proven vetting methodology to secure reliable manufacturing partners.',
      sections: [
        {
          heading: '1. The 5 Non-Negotiable Manufacturer Certifications',
          body: [
            'Before entering commercial discussions, verify that the factory holds: 1. ISO 9001 (Quality Management), 2. WHO-GMP (Good Manufacturing Practices), 3. Category Drug / Cosmetic License, 4. Pollution Control Board clearances, and 5. In-house Quality Control (QC) laboratory testing infrastructure.'
          ]
        },
        {
          heading: '2. Negotiating Minimum Order Quantities (MOQs) and Payment Terms',
          body: [
            'Standard factories often demand 5,000+ units per SKU. An experienced private label consultant negotiates pilot batch minimums of 500 to 1,000 units, freeing up your working capital for aggressive marketing and customer acquisition.'
          ]
        }
      ]
    }
  },
  {
    id: 'how-much-does-it-cost-to-launch-a-brand',
    slug: 'how-much-does-it-cost-to-launch-a-brand',
    title: 'How Much Does It Cost to Launch a Brand in India? (Real Budget Breakdown)',
    category: 'Private Label & D2C',
    readTime: '5 min read',
    author: 'Mayank Tiwari (Brand Consultant)',
    date: '2026-08-05',
    excerpt: 'Detailed financial breakdown of launching a consumer product brand in India. Real costs for formulation, inventory, packaging, regulatory filings, and launch ads.',
    targetKeywords: [
      'How much does it cost to launch a brand',
      'Brand development company in India',
      'D2C Consultant',
      'Private Label Consultant',
      'Best product launch company in India'
    ],
    h1: 'How Much Does It Cost to Launch a Consumer Brand in India? Real Budget Breakdown',
    content: {
      intro: 'One of the most common questions aspiring founders ask is: "How much capital do I actually need to launch my product brand?" Here is a transparent, realistic budget breakdown across formulation, manufacturing, packaging, and go-to-market execution.',
      sections: [
        {
          heading: '1. Core Investment Categories Breakdown',
          body: [
            '• Formulation & Lab Sampling: ₹25,000 – ₹75,000\n• Pilot Batch Inventory (500-1000 units): ₹1,50,000 – ₹4,000,000\n• Custom Luxury Packaging & Labels: ₹50,000 – ₹1,50,000\n• Regulatory Compliances & Trademark: ₹20,000 – ₹50,000\n• Shopify Storefront & Visual Assets: ₹40,000 – ₹90,000\n• Initial Launch Performance Marketing: ₹50,000 – ₹1,50,000',
            'Total Average Launch Budget: ₹3.5 Lakhs to ₹9 Lakhs depending on category complexity.'
          ]
        }
      ]
    }
  }
];

export const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogArticle | null>(null);
  const [customBlogs, setCustomBlogs] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('bb_blogs');
    if (saved) {
      try {
        setCustomBlogs(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const categories = [
    'All',
    'Launch Strategy',
    'Perfume & Fragrance',
    'Skincare & Cosmetics',
    'Ayurveda & Wellness',
    'Manufacturing & Sourcing',
    'Private Label & D2C'
  ];

  // Filter articles based on category and search query
  const filteredArticles = DEFAULT_ARTICLES.filter((art) => {
    const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch = 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.targetKeywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="relative bg-[#FAFAFA] text-[#111111] selection:bg-[#D97706] selection:text-white font-sans min-h-screen">
      
      {/* Dynamic SEO Meta Tags */}
      <Helmet>
        <title>Product Launch & Brand Strategy Blog | Banega Brand – India's Leading Product Launch Company</title>
        <meta 
          name="description" 
          content="Explore actionable blueprints on how to launch perfume, skincare, cosmetic, and Ayurvedic brands in India. Expert insights on formulation, manufacturer sourcing, and D2C scaling by Mayank Tiwari."
        />
        <meta 
          name="keywords" 
          content="Product Launch Company, Product Launch Consultant, Brand Development Company, How to launch a product in India, How to start a perfume brand in India, How to start a skincare brand, Private label consultant in India"
        />
        <link rel="canonical" href="https://banegabrand.com/blog" />
        <meta property="og:title" content="Product Launch & Brand Strategy Knowledge Hub | Banega Brand" />
        <meta property="og:description" content="Master product launch strategies, factory sourcing, formulation, and D2C marketing." />
        <meta property="og:url" content="https://banegabrand.com/blog" />
      </Helmet>

      <Navbar />

      <main className="pt-36 pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-200 shadow-sm">
            <Sparkles size={13} className="text-[#D97706] fill-[#D97706] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#111111]">
              PRODUCT LAUNCH INSIGHTS & BLUEPRINTS
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#111111] leading-tight">
            Learn How To Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] via-[#f59e0b] to-[#b45309]">
              High-Margin Brands
            </span>
          </h1>

          <p className="text-base md:text-lg text-zinc-600 font-medium leading-relaxed">
            Direct playbooks, manufacturing guides, formulation rules, and go-to-market strategies curated by India’s #1 Product Launch Consultancy.
          </p>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="space-y-6 mb-12">
          {/* Search Box */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search topics: perfume launch, manufacturing, cosmetics, costs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white rounded-2xl border border-zinc-200 shadow-sm focus:outline-none focus:border-[#D97706] font-medium text-sm transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 text-xs font-bold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#111111] text-white shadow-md'
                    : 'bg-white text-zinc-600 border border-zinc-200 hover:border-[#D97706] hover:text-[#D97706]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured / Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <article 
              key={art.id}
              onClick={() => setActiveArticle(art)}
              className="bg-white rounded-3xl border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-[#D97706]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              <div className="p-7 space-y-4">
                {/* Meta info */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#D97706]/10 text-[#D97706] border border-[#D97706]/20">
                    {art.category}
                  </span>
                  <span className="text-[10px] font-bold text-zinc-400 flex items-center gap-1">
                    <Clock size={11} /> {art.readTime}
                  </span>
                </div>

                {/* Article Title */}
                <h2 className="text-xl font-black text-zinc-900 group-hover:text-[#D97706] transition-colors leading-snug">
                  {art.title}
                </h2>

                {/* Excerpt */}
                <p className="text-xs text-zinc-500 font-medium leading-relaxed line-clamp-3">
                  {art.excerpt}
                </p>

                {/* Key Target Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {art.targetKeywords.slice(0, 3).map((kw, idx) => (
                    <span key={idx} className="text-[9px] font-semibold text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-md">
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-7 py-4 bg-zinc-50/80 border-t border-zinc-150 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#D97706] text-white flex items-center justify-center text-[10px] font-black">
                    M
                  </div>
                  <span className="text-[10px] font-bold text-zinc-700">Mayank Tiwari</span>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-[#D97706] group-hover:translate-x-1 transition-transform">
                  <span>Read Guide</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Custom Uploaded Blogs from Admin */}
        {customBlogs.length > 0 && (
          <div className="mt-20 pt-12 border-t border-zinc-200">
            <h2 className="text-2xl font-black uppercase tracking-tight text-zinc-900 mb-8">
              Community & Admin Announcements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {customBlogs.map((b, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                  <span className="text-[10px] font-bold text-[#D97706] uppercase tracking-wider block mb-1">
                    {new Date(b.date).toLocaleDateString()}
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">{b.title}</h3>
                  <p className="text-xs text-zinc-600 whitespace-pre-wrap">{b.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Launch Call to Action Card */}
        <div className="mt-20 bg-[#111111] rounded-[36px] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl border border-zinc-800">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D97706]/20 blur-[140px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#D97706] bg-[#D97706]/10 px-3 py-1 rounded-full border border-[#D97706]/20 inline-block">
              READY TO LAUNCH YOUR PRODUCT?
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight">
              Get A 1-on-1 Launch Strategy Blueprint With Mayank Tiwari
            </h2>
            <p className="text-sm text-zinc-400 font-medium">
              Eliminate costly mistakes, lock in vetted contract manufacturers, and launch your brand with 70%+ gross margins.
            </p>
            <div className="pt-2">
              <Link 
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#D97706] text-white hover:bg-white hover:text-[#111111] rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-200 shadow-lg hover:scale-105"
              >
                BOOK A FREE STRATEGY CALL
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

      </main>

      {/* FULL ARTICLE READER MODAL (SEO & AEO FORMATTED) */}
      {activeArticle && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-[32px] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-zinc-200 relative my-8">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 md:px-10 py-4 border-b border-zinc-150 flex items-center justify-between z-20">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#D97706] bg-[#D97706]/10 px-3 py-1 rounded-full">
                {activeArticle.category}
              </span>
              <button 
                onClick={() => setActiveArticle(null)}
                className="p-2 rounded-full hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 md:p-12 space-y-8">
              {/* Meta & H1 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs font-bold text-zinc-400">
                  <span>Published by {activeArticle.author}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#111111] leading-tight">
                  {activeArticle.h1}
                </h1>
              </div>

              {/* Intro Box */}
              <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-200/60 font-medium text-sm text-zinc-700 leading-relaxed">
                {activeArticle.content.intro}
              </div>

              {/* Main Content Sections */}
              <div className="space-y-8">
                {activeArticle.content.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className="text-2xl font-black text-[#111111] uppercase tracking-tight border-b border-zinc-150 pb-2">
                      {sec.heading}
                    </h2>
                    {sec.subheading && (
                      <h3 className="text-sm font-bold text-[#D97706] uppercase tracking-wider">
                        {sec.subheading}
                      </h3>
                    )}
                    <div className="space-y-3 text-sm text-zinc-600 font-medium leading-relaxed">
                      {sec.body.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {sec.keyPoints && (
                      <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200 space-y-2 mt-3">
                        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest block">
                          Key Takeaways & Action Items:
                        </span>
                        <ul className="space-y-2">
                          {sec.keyPoints.map((kp, kpIdx) => (
                            <li key={kpIdx} className="flex items-start gap-2 text-xs font-bold text-zinc-800">
                              <CheckCircle2 size={14} className="text-[#D97706] shrink-0 mt-0.5" />
                              <span>{kp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* FAQs Section (Direct AEO & Google Snippet target) */}
              {activeArticle.content.faqs && (
                <div className="mt-12 pt-8 border-t border-zinc-200 space-y-6">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="text-[#D97706]" size={20} />
                    <h3 className="text-xl font-black uppercase text-zinc-900 tracking-tight">
                      Frequently Asked Questions (AEO Snippets)
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {activeArticle.content.faqs.map((faq, fIdx) => (
                      <div key={fIdx} className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200 space-y-2">
                        <h4 className="font-bold text-sm text-[#111111]">
                          Q: {faq.q}
                        </h4>
                        <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Article CTA */}
              <div className="mt-10 p-8 rounded-3xl bg-[#111111] text-white text-center space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tight">
                  Want To Execute This Strategy For Your Brand?
                </h3>
                <p className="text-xs text-zinc-400 max-w-md mx-auto">
                  Schedule a direct strategy call with our product launch team to get customized formulation, sourcing, and scaling blueprints.
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    onClick={() => setActiveArticle(null)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#D97706] text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-all"
                  >
                    BOOK FREE STRATEGY CALL
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      <MainFooter />
    </div>
  );
};
