import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import {
  HelpCircle,
  Minus,
  Plus
} from 'lucide-react';

import { Navbar } from '../components/Navbar';
import { FigmaFooter } from '../components/FigmaFooter';
import { SchbangContactSection } from '../components/SchbangContactSection';

// FAQ Item Component with luxury typography
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-200/80 py-6 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left text-base sm:text-lg font-bold tracking-tight text-[#111111] hover:text-[#FF5722] transition-colors cursor-pointer select-none"
      >
        <span>{question}</span>
        <span className="ml-4 p-1.5 rounded-full bg-zinc-100 text-[#111111] shrink-0">
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 12 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const ContactPage: React.FC = () => {
  return (
    <div 
      className="relative bg-white text-[#111111] overflow-x-hidden min-h-screen"
      style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
    >
      <Helmet>
        <title>Contact Us | Banega Brand – India's Leading Product Launch Company</title>
        <meta name="description" content="Connect with Mayank Tiwari and the Banega Brand team for end-to-end fragrance, skincare, and cosmetic brand development." />
        <meta name="keywords" content="Contact Banega Brand, Book Launch Call, Product Launch Consultant, Mayank Tiwari WhatsApp" />
        <link rel="canonical" href="https://banegabrand.com/contact" />
      </Helmet>

      <Navbar />

      <main className="pt-20 sm:pt-24">
        {/* ── 1. EXACT SCHBANG CONTACT US SECTION ──────────────────────────────── */}
        <SchbangContactSection />

        {/* ── 2. FAQ SECTION ─────────────────────────────────────────────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-b border-zinc-200">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100 text-[#FF5722] text-xs font-bold uppercase tracking-wider">
                <HelpCircle size={14} />
                Frequently Asked Questions
              </div>
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl font-normal uppercase tracking-tight text-[#111111]"
                style={{ fontFamily: "'Playfair Display', 'Bodoni MT', Georgia, serif" }}
              >
                Quick Clarity
              </h2>
            </div>

            <div className="bg-white border border-zinc-200 rounded-[32px] p-6 sm:p-10 text-left shadow-2xs">
              <FAQItem 
                question="What is the turnaround time when I submit this form?" 
                answer="Our product launch and formulations team reviews every submission and responds within 2 business days with initial feasibility and available strategy consultation slots."
              />
              <FAQItem 
                question="How do I know if my product idea is viable?" 
                answer="During the session, we'll discuss your product concept, target market, active ingredients, and manufacturing requirements. We'll provide honest feedback on feasibility, potential challenges, and next steps."
              />
              <FAQItem 
                question="What industries do you specialize in?" 
                answer="We specialize in physical product launches across 4 high-growth categories: Luxury Perfume & Fine Fragrances, Color Cosmetics & Makeup, Authentic Ayurveda & Botanicals, and Clinical Skincare & Derma with GMP-certified partner labs across India."
              />
              <FAQItem 
                question="Do you work with first-time entrepreneurs?" 
                answer="Absolutely. We work with founders at all stages — from first-time entrepreneurs to legacy family businesses. Our structured 6-step framework simplifies the launch process and eliminates costly mistakes."
              />
              <FAQItem 
                question="What is the typical timeline from idea to launch?" 
                answer="With our proven framework, standard turnaround is 45 to 90 days. This includes custom compounding, stability testing, packaging production, barcode registration, factory manufacturing, and marketplace listing."
              />
            </div>
          </div>
        </section>

      </main>

      <FigmaFooter />
    </div>
  );
};

export default ContactPage;