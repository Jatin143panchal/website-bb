import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    question: 'Can I launch an Ayurvedic product from just an idea?',
    answer:
      'Yes, absolutely. Over 65% of founders who launch with Banega begin with only an idea or problem statement (e.g., “I want to create a clean Ayurvedic hair oil for postpartum hair fall”). We handle the technical ingredient selection, laboratory formulation, stability testing, custom bottle sourcing, and AYUSH licensing from scratch.',
  },
  {
    question: 'Can you help with formulation?',
    answer:
      'Yes. Our team consists of seasoned Ayurvedic Vaidyas, cosmetic chemists, and pharmacology researchers who develop proprietary formulas balancing classical Sanskrit texts (like Charaka Samhita & Bhavaprakasha) with modern cosmetic texture elegance and shelf stability.',
  },
  {
    question: 'Can I choose my ingredients?',
    answer:
      'Yes! You can specify your hero botanicals (e.g. Kashmiri Saffron, KSM-66 Ashwagandha, Bhringraj, Centella Asiatica, Cold-Pressed Rosehip). We ensure all selected ingredients are ethically sourced, certified pesticide-free, and clinically standardized for potency.',
  },
  {
    question: 'Can I create a completely custom product?',
    answer:
      'Yes. Every formulation we create for your brand is proprietary to you. We do not sell generic off-the-shelf white-label stock. Your aroma, active percentage, absorption speed, and skin feel are custom-developed to your exact benchmark.',
  },
  {
    question: 'Can you help with packaging?',
    answer:
      'Yes. Packaging is one of our greatest strengths. We source UV-blocking pharmaceutical amber glass, matte ceramic jars, precision dropper pipettes, tactile cotton paper labels, and rigid unboxing boxes designed to elevate your brand above 1990s generic herbal tropes.',
  },
  {
    question: 'Can you manufacture the finished product?',
    answer:
      'Yes. We manufacture across our audited network of 108+ AYUSH GMP-certified facilities in India. Every single batch undergoes third-party ICP-MS heavy metal testing (Lead, Mercury, Arsenic, Cadmium) and microbial clearance before release.',
  },
  {
    question: 'Can I launch multiple products together?',
    answer:
      'Yes. Many founders launch with a 3 to 5 SKU ritual collection (e.g. Cleanser + Serum + Face Oil + Night Cream). Our Range Builder maps unified packaging, cross-sell funnels, and coordinated production schedules.',
  },
  {
    question: 'Can you help build the brand identity?',
    answer:
      'Yes. Our in-house creative agency designs your brand naming, logo crest, color palette, typography guidelines, 3D photorealistic bottle renders, and high-converting Shopify digital flagship store.',
  },
  {
    question: 'Can you help with ecommerce and marketplace launch?',
    answer:
      'Yes. We handle end-to-end marketplace onboarding: Amazon Brand Registry, Flipkart onboarding, Nykaa Luxury onboarding, warehouse barcoding, and Meta ad campaign setup.',
  },
  {
    question: 'How long does the process take?',
    answer:
      'Our turnkey incubation process takes 45 to 90 days from initial formulation brief to market-ready stock in your warehouse, depending on packaging customization and testing requirements.',
  },
];

export const AyurvedaFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="ayurveda-faq" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-[#FAFAFA] text-[#111111] select-none border-b border-zinc-200">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-left space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              19 — FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2
            className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.06] uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            PRACTICAL AYURVEDA <br />
            <span className="text-zinc-400 italic">BRAND LAUNCH FAQS.</span>
          </h2>

          <p
            className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            Clear, honest answers on formulation feasibility, AYUSH compliance, manufacturing MOQs, and launch timelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden text-left ${
                  isOpen
                    ? 'bg-white border-black shadow-md'
                    : 'bg-white hover:bg-zinc-50 border-zinc-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <span
                    className="text-base sm:text-lg font-normal text-[#111111]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-black text-white' : 'bg-zinc-100 text-zinc-600'
                    }`}
                  >
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4 font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AyurvedaFaqSection;
