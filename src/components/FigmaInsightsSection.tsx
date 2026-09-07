import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InsightItem {
  id: string;
  isBlog?: boolean;
  readTime?: string;
  question: string;
  answer: string;
  link?: string;
}

const insights: InsightItem[] = [
  {
    id: '1',
    question: 'How long does it take from formulation concept to marketplace shelf?',
    answer: 'With Banega Brand’s proven 6-step framework, standard turnaround is 45 to 90 days. This includes custom fragrance/skincare compounding, stability testing, packaging production, barcode registration, factory manufacturing, and seller central listing.',
  },
  {
    id: '2',
    question: 'Do you manage CDSCO, IFRA, AYUSH, and legal regulatory compliance?',
    answer: 'Yes, 100%. We handle complete cosmetic manufacturing licenses (CDSCO), IFRA 51st Amendment fragrance compounding standards, AYUSH classical & proprietary approvals, barcode registrations (GS1), trademark filing advisory, and mandatory label claims verification.',
  },
  {
    id: '3',
    question: 'Can you help structure low-MOQ batches for new brand founders?',
    answer: 'Absolutely. We leverage our network of 40+ audited GMP-certified partner factories across India (Himachal, Gujarat, Maharashtra, Uttarakhand) to negotiate flexible minimum order quantities (MOQs), allowing you to validate demand without locking up massive capital.',
  },
  {
    id: '4',
    isBlog: true,
    readTime: '10 mins read',
    question: 'How D2C Fragrance Brands Generate ₹50L+ in Month 1 on Amazon & Nykaa',
    answer: 'Learn the exact pricing tiering, luxury unboxing psychology, influencer gifting strategy, and Amazon PPC ad architecture used by India’s top perfume startups to achieve rapid break-even.',
    link: '/blog',
  },
  {
    id: '5',
    isBlog: true,
    readTime: '8 mins read',
    question: 'Private Label vs Custom Formulation: Which is Right for Your Brand in 2026?',
    answer: 'A comprehensive breakdown of profit margins, IP ownership, regulatory timelines, and scalability considerations when choosing between ready formulations and proprietary active blends.',
    link: '/blog',
  },
];

export const FigmaInsightsSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      className="w-full bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-zinc-100"
      style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-[#FF5722] text-xs font-bold uppercase tracking-wider">
            Knowledge & Transparency
          </div>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-normal uppercase tracking-tight text-[#111111] leading-tight"
            style={{
              fontFamily: "'Playfair Display', 'Bodoni MT', 'Didot', 'Cormorant Garamond', Georgia, serif",
              letterSpacing: '-0.015em',
            }}
          >
            Strategy, FAQs & Insights
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            Everything you need to know about building, formulating, manufacturing, and scaling your brand in India.
          </p>
        </div>

        {/* Clean Accordion & Blog List */}
        <div className="divide-y divide-zinc-200/80">
          {insights.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="py-6 transition-colors">
                <div
                  onClick={() => toggleItem(item.id)}
                  className="flex items-start justify-between gap-4 cursor-pointer group select-none"
                >
                  <div className="space-y-1.5 flex-1 pr-4">
                    {/* Blog tag if applicable */}
                    {item.isBlog && (
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF5722] text-[10px] font-black uppercase tracking-wider">
                          Blog
                        </span>
                        {item.readTime && (
                          <span className="text-[11px] font-semibold text-zinc-400 flex items-center gap-1">
                            <Clock size={11} />
                            {item.readTime}
                          </span>
                        )}
                      </div>
                    )}
                    
                    <h3 className={`text-base sm:text-lg md:text-xl font-bold tracking-tight transition-colors ${
                      isOpen ? 'text-[#FF5722]' : 'text-zinc-900 group-hover:text-[#FF5722]'
                    }`}>
                      {item.question}
                    </h3>
                  </div>

                  {/* Toggle Icon */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isOpen
                      ? 'bg-[#FF5722] text-white rotate-180 shadow-xs'
                      : 'bg-zinc-100 text-zinc-600 group-hover:bg-orange-100 group-hover:text-[#FF5722]'
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </div>

                {/* Expanded Answer Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-3xl space-y-3 font-normal">
                        <p>{item.answer}</p>
                        {item.link && (
                          <div className="pt-1">
                            <Link
                              to={item.link}
                              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF5722] hover:underline"
                            >
                              Read Full Article <ArrowUpRight size={14} />
                            </Link>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* View All Blog Link */}
        <div className="mt-8 text-center sm:text-left">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF5722] hover:text-[#e04a1b] transition-colors"
          >
            Explore all guides & founder case studies in our Blog <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};
