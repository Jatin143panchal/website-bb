import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    question: 'Can I launch skincare with just an idea?',
    answer:
      'Yes! More than 70% of skincare founders start with an idea or a specific problem they want to solve (e.g. “I want to launch a gentle 10% Niacinamide serum for sensitive skin”). We engineer the complete formula, source airless vacuum bottles, conduct dermatological patch testing, and manage production from scratch.',
  },
  {
    question: 'Can you develop a custom formula?',
    answer:
      'Yes. Every formula developed by Banega is 100% custom-developed and proprietary to your brand. We do not sell generic white-label stock. Our cosmetic chemists customize the active percentages, pH stability, texture slip, and sensory feel to match your benchmark.',
  },
  {
    question: 'Can I choose ingredients / actives?',
    answer:
      'Yes! You can specify your desired actives (like Niacinamide, Vitamin C, Multi-Ceramides, Granactive Retinoids, Salicylic Acid, Centella Asiatica, Peptides, or Plant Squalane). We ensure all raw actives are pharmaceutical grade with verified supplier COAs.',
  },
  {
    question: 'Can I customise the texture?',
    answer:
      'Absolutely. Texture is a core part of our formulation process. During the sampling phase, we courier physical trial bottles to your doorstep. You can evaluate absorption speed, cushion, water-burst feel, and dry-down until you achieve your exact benchmark.',
  },
  {
    question: 'Can you help with packaging?',
    answer:
      'Yes. We source airless vacuum pumps, heavy flint glass droppers, UV amber bottles, aluminum tubes, double-wall jars, and FSC unboxing cartons with custom debossing and foil stamping.',
  },
  {
    question: 'What is the minimum order quantity (MOQ)?',
    answer:
      'We offer flexible starting batch MOQs beginning at 250 to 500 units per SKU for pilot validation launches, scaling up to 5,000+ units for high-volume commercial runs.',
  },
  {
    question: 'Can you manufacture the finished product?',
    answer:
      'Yes. Production takes place in our audited network of 108+ cleanroom GMP-certified manufacturing facilities in India. Every batch is micro-tested, dermatologically cleared, and accompanied by a comprehensive Certificate of Analysis (COA).',
  },
  {
    question: 'Can I launch multiple skincare products together?',
    answer:
      'Yes. Many founders launch with a coordinated 3 to 4-step routine (e.g. Cleanser + Vitamin C Serum + Barrier Cream + Sunscreen SPF 50). We formulate all products to layer seamlessly without pilling.',
  },
  {
    question: 'Can you build the branding and website?',
    answer:
      'Yes. Our creative team designs your brand naming, logo, packaging dielines, 3D photorealistic bottle renders, and high-converting Shopify D2C store with routine diagnostic quizzes.',
  },
  {
    question: 'How long does the launch process take?',
    answer:
      'Our turnkey skincare incubation process typically takes 45 to 90 days from initial formulation brief to market-ready finished inventory delivered to your warehouse.',
  },
];

export const SkincareFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="skincare-faq" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-[#FAFAFA] text-[#111111] select-none border-b border-zinc-200">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              19 — FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2
            className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.08] uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            PRACTICAL SKINCARE <br />
            <span className="font-light text-zinc-500 italic" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
              BRAND LAUNCH FAQS.
            </span>
          </h2>

          <p
            className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            Clear, honest answers on active formulation, textures, packaging protection, and commercial launch timelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden text-left ${
                  isOpen
                    ? 'bg-white border-black shadow-sm'
                    : 'bg-white/80 hover:bg-white border-zinc-200'
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
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
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
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
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

export default SkincareFaqSection;
