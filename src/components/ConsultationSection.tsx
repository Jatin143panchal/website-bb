import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';

const INDUSTRIES = [
  'Perfume & Fine Fragrances',
  'Color Cosmetics & Makeup',
  'Authentic Ayurveda',
  'Clinical Skincare & Derma',
];

const BUDGETS = [
  'Under ₹5 Lakhs',
  '₹5 Lakhs - ₹15 Lakhs',
  '₹15 Lakhs - ₹30 Lakhs',
  '₹30 Lakhs+',
];

const TIMELINES = [
  'Under 30 Days',
  '30-60 Days',
  '60-90 Days',
  'Flexible',
];

const STAGES = [
  'Just an Idea',
  'Sampling',
  'Ready to Manufacture',
  'Fully Operational',
];

export const ConsultationSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    industry: 'Perfume & Fine Fragrances',
    budget: '₹5 Lakhs - ₹15 Lakhs',
    timeline: '30-60 Days',
    stage: 'Just an Idea',
    idea: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '5eda95b0-84fb-4620-8e31-abaa006328c2',
          ...formData,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            phone: '',
            email: '',
            industry: 'Perfume & Fine Fragrances',
            budget: '₹5 Lakhs - ₹15 Lakhs',
            timeline: '30-60 Days',
            stage: 'Just an Idea',
            idea: '',
          });
        }, 6000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consultation" className="relative w-full bg-[#FAFAF9] text-[#111111] py-24 sm:py-32 md:py-40 px-4 sm:px-6 lg:px-12 overflow-hidden border-t border-zinc-200">
      
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none -z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* ── LEFT EDITORIAL BRIEFING COLUMN ─────────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6 lg:sticky lg:top-28 text-left">
            
            {/* Main Headline */}
            <div className="space-y-3">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal uppercase tracking-tight text-[#111111] leading-[1.02] space-y-1">
                <span 
                  className="block text-4xl sm:text-5xl md:text-6xl font-normal uppercase tracking-tight text-[#111111]"
                  style={{ 
                    fontFamily: "'Playfair Display', 'Bodoni MT', 'Didot', 'Cormorant Garamond', Georgia, serif",
                    letterSpacing: '-0.015em' 
                  }}
                >
                  Start Your
                </span>
                <span 
                  className="block text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-wide text-[#555555]"
                  style={{ 
                    fontFamily: "'Mulish', 'Outfit', 'Sora', system-ui, sans-serif",
                    letterSpacing: '0.01em',
                    fontWeight: 300 
                  }}
                >
                  Brand Journey
                </span>
              </h2>

              <p 
                className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-lg"
                style={{ fontFamily: "'Mulish', 'Muli', system-ui, sans-serif" }}
              >
                Tell us your idea — even if it's just a concept. We'll map out the exact steps to take it from raw idea to shelves across India.
              </p>
            </div>

            {/* Clean Proof Points (Icon removed, clean spacing) */}
            <div className="w-full space-y-2.5 pt-3 border-t border-zinc-200">
              {[
                'End-to-end execution — formula to marketplace',
                'GMP-certified factory network across India',
                'Launched 215+ brands across Amazon, Flipkart & Nykaa',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] shrink-0" />
                  <span 
                    className="text-xs sm:text-sm font-semibold text-zinc-800 tracking-tight"
                    style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* WhatsApp Quick Connect Button */}
            <div className="w-full sm:w-auto pt-1">
              <a
                href="https://wa.me/918796755169?text=Hi%20Mayank%2C%20I%20want%20to%20launch%20my%20brand%20with%20BanegaBrand!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle size={17} />
                <span>Chat on WhatsApp — Instant Reply</span>
              </a>
            </div>

            {/* Architectural SLA Pledge Quote Box (Beautiful & Clean) */}
            <div className="w-full p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-sm space-y-2 transition-all hover:border-zinc-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5722] animate-pulse" />
                <span 
                  className="text-[11px] tracking-widest text-[#111111] font-bold uppercase"
                  style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
                >
                  OUR SLA PLEDGE
                </span>
              </div>
              <p 
                className="text-xs sm:text-[13px] font-medium text-zinc-600 italic leading-relaxed"
                style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
              >
                "No pressure. No spam. Just operational clarity to transform raw chemical ideas into market-ready brands."
              </p>
            </div>

          </div>

          {/* ── RIGHT STUDIO INTAKE FORM (INTERNATIONAL LUXURY UI) ─────────── */}
          <div className="lg:col-span-7 w-full bg-white rounded-3xl sm:rounded-[32px] p-6 sm:p-10 md:p-12 border border-zinc-200/90 shadow-xl relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-16 text-center space-y-6"
                >
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 size={32} className="stroke-[2.5]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#111111]">
                      Launch Blueprint Initiated
                    </h3>
                    <p className="text-zinc-600 font-medium text-sm max-w-sm mx-auto leading-relaxed">
                      Your brand concept has been logged. Our chief formulation and manufacturing strategist will reach out within 24 hours with an actionable roadmap.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-7 text-left"
                >
                  {/* Contact Info (Name, Phone, Email) */}
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-800">
                        Full Name <span className="text-[#FF5722]">*</span>
                      </label>
                      <input
                        id="name"
                        required
                        type="text"
                        placeholder="e.g., Mayank Tiwari"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-12 sm:h-13 px-4 rounded-xl bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-black focus:ring-1 focus:ring-black text-sm font-semibold text-zinc-900 outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-zinc-800">
                          Phone Number <span className="text-[#FF5722]">*</span>
                        </label>
                        <input
                          id="phone"
                          required
                          type="tel"
                          placeholder="e.g., +91 87967 55169"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full h-12 sm:h-13 px-4 rounded-xl bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-black focus:ring-1 focus:ring-black text-sm font-semibold text-zinc-900 outline-none transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-800">
                          Email Address <span className="text-[#FF5722]">*</span>
                        </label>
                        <input
                          id="email"
                          required
                          type="email"
                          placeholder="e.g., founder@mybrand.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full h-12 sm:h-13 px-4 rounded-xl bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-black focus:ring-1 focus:ring-black text-sm font-semibold text-zinc-900 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 1. Industry Category Pill Selection */}
                  <div className="space-y-2.5 pt-2 border-t border-zinc-100">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-800 block">
                      Industry Category
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {INDUSTRIES.map((ind) => {
                        const isSelected = formData.industry === ind;
                        return (
                          <button
                            key={ind}
                            type="button"
                            onClick={() => setFormData({ ...formData, industry: ind })}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? 'bg-[#111111] text-white shadow-sm'
                                : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200/80 border border-zinc-200/60'
                            }`}
                          >
                            {ind}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Budget Segment Pill Selection */}
                  <div className="space-y-2.5 pt-2 border-t border-zinc-100">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-800 block">
                      Budget Segment
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {BUDGETS.map((bud) => {
                        const isSelected = formData.budget === bud;
                        return (
                          <button
                            key={bud}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: bud })}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? 'bg-[#111111] text-white shadow-sm'
                                : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200/80 border border-zinc-200/60'
                            }`}
                          >
                            {bud}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. Launch Timeline Pill Selection */}
                  <div className="space-y-2.5 pt-2 border-t border-zinc-100">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-800 block">
                      Launch Timeline
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {TIMELINES.map((time) => {
                        const isSelected = formData.timeline === time;
                        return (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setFormData({ ...formData, timeline: time })}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? 'bg-[#111111] text-white shadow-sm'
                                : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200/80 border border-zinc-200/60'
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 4. Current Stage Pill Selection */}
                  <div className="space-y-2.5 pt-2 border-t border-zinc-100">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-800 block">
                      Current Stage
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {STAGES.map((stg) => {
                        const isSelected = formData.stage === stg;
                        return (
                          <button
                            key={stg}
                            type="button"
                            onClick={() => setFormData({ ...formData, stage: stg })}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? 'bg-[#111111] text-white shadow-sm'
                                : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200/80 border border-zinc-200/60'
                            }`}
                          >
                            {stg}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Textarea Description */}
                  <div className="space-y-1.5 pt-2 border-t border-zinc-100">
                    <label htmlFor="idea" className="text-xs font-bold uppercase tracking-wider text-zinc-800 block">
                      Tell Us About Your Idea <span className="text-[#FF5722]">*</span>
                    </label>
                    <textarea
                      id="idea"
                      required
                      rows={3}
                      placeholder="Describe your product vision, target market, formulation concept, or brand aspiration..."
                      value={formData.idea}
                      onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                      className="w-full p-4 rounded-xl bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-black focus:ring-1 focus:ring-black text-sm font-medium text-zinc-900 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* High Impact Primary CTA Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4.5 rounded-2xl bg-[#FF5722] hover:bg-[#e04a1b] text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#FF5722]/25 active:scale-98 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
                    style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
                  >
                    <span>{isSubmitting ? 'Transmitting Concept...' : 'Start My Brand Launch — Free Consultation'}</span>
                    <ArrowRight size={18} />
                  </button>

                  <div 
                    className="flex flex-wrap items-center justify-center gap-2 text-center text-[10px] sm:text-[11px] font-bold tracking-wider text-zinc-400 uppercase pt-1"
                    style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
                  >
                    <span>CONFIDENTIAL</span>
                    <span className="text-zinc-300">•</span>
                    <span>NO SPAM</span>
                    <span className="text-zinc-300">•</span>
                    <span>24-HOUR EXECUTIVE SLA RESPONSE</span>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;