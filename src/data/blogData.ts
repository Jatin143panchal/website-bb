export interface BlogSection {
  heading: string;
  subheading?: string;
  body: string[];
  keyPoints?: string[];
}

export interface BlogFAQ {
  q: string;
  a: string;
}

export interface BlogArticle {
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
  imageUrl?: string;
  content: {
    intro: string;
    sections: BlogSection[];
    faqs?: BlogFAQ[];
  };
  isCustom?: boolean;
}

export const BLOG_CATEGORIES = [
  'All',
  'Launch Strategy',
  'Perfume & Fragrance',
  'Skincare & Cosmetics',
  'Ayurveda & Wellness',
  'Manufacturing & Sourcing',
  'Private Label & D2C',
  'D2C & Marketplace'
];

export const DEFAULT_ARTICLES: BlogArticle[] = [
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
            '• Formulation & Lab Sampling: ₹25,000 – ₹75,000\n• Pilot Batch Inventory (500-1000 units): ₹1,50,000 – ₹4,00,000\n• Custom Luxury Packaging & Labels: ₹50,000 – ₹1,50,000\n• Regulatory Compliances & Trademark: ₹20,000 – ₹50,000\n• Shopify Storefront & Visual Assets: ₹40,000 – ₹90,000\n• Initial Launch Performance Marketing: ₹50,000 – ₹1,50,000',
            'Total Average Launch Budget: ₹3.5 Lakhs to ₹9 Lakhs depending on category complexity.'
          ]
        }
      ]
    }
  }
];

const STORAGE_KEY = 'bb_blogs_v2';

export const getStoredBlogs = (): BlogArticle[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error reading stored blogs:', e);
    return [];
  }
};

export const saveStoredBlogs = (blogs: BlogArticle[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
  } catch (e) {
    console.error('Error saving blogs:', e);
  }
};

export const getAllBlogs = (): BlogArticle[] => {
  const custom = getStoredBlogs();
  // Filter out any default articles that might have been customized
  const customIds = new Set(custom.map(b => b.id));
  const defaults = DEFAULT_ARTICLES.filter(d => !customIds.has(d.id));
  return [...custom, ...defaults];
};

export const addOrUpdateBlog = (blog: BlogArticle): void => {
  const custom = getStoredBlogs();
  const existingIdx = custom.findIndex(b => b.id === blog.id || b.slug === blog.slug);
  
  if (existingIdx >= 0) {
    custom[existingIdx] = { ...blog, isCustom: true };
  } else {
    custom.unshift({ ...blog, isCustom: true });
  }
  
  saveStoredBlogs(custom);
};

export const deleteStoredBlog = (id: string): void => {
  const custom = getStoredBlogs();
  const updated = custom.filter(b => b.id !== id);
  saveStoredBlogs(updated);
};
