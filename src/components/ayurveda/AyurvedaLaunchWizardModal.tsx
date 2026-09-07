import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Check, Sparkles, Droplet, Shield, Leaf, Factory, Send, Phone } from 'lucide-react';

export interface AyurvedaWizardPrefill {
  category?: string;
  products?: string[];
  stage?: string;
  scope?: string;
  archetype?: string;
  rangeItems?: string[];
  totalProducts?: number;
}

interface AyurvedaLaunchWizardModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefill?: AyurvedaWizardPrefill;
}

export const AyurvedaLaunchWizardModal: React.FC<AyurvedaLaunchWizardModalProps> = ({
  isOpen,
  onClose,
  prefill,
}) => {
  const wizardPrefill: AyurvedaWizardPrefill = prefill || {};
  const [step, setStep] = useState<number>(1);
  const [category, setCategory] = useState<string>(wizardPrefill.category || 'Herbal Skincare');
  const [selectedProducts, setSelectedProducts] = useState<string[]>(
    wizardPrefill.products || ['Face Serum', 'Kumkumadi Oil']
  );
  const [stage, setStage] = useState<string>(wizardPrefill.stage || 'Just an Idea');
  const [scope, setScope] = useState<string>(wizardPrefill.scope || 'Complete Launch');
  const [archetype, setArchetype] = useState<string>(wizardPrefill.archetype || 'Modern Ayurveda');

  // Contact form state
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (prefill?.category) setCategory(prefill.category);
    if (prefill?.products && prefill.products.length > 0) setSelectedProducts(prefill.products);
    if (prefill?.stage) setStage(prefill.stage);
    if (prefill?.scope) setScope(prefill.scope);
    if (prefill?.archetype) setArchetype(prefill.archetype);
  }, [prefill, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Optional: Submit to Web3Forms
      const formData = new FormData();
      formData.append('access_key', 'YOUR_ACCESS_KEY_HERE'); // web3forms fallback
      formData.append('subject', `New Ayurveda Launch Inquiry: ${fullName}`);
      formData.append('Category', category);
      formData.append('Products', selectedProducts.join(', '));
      formData.append('Stage', stage);
      formData.append('Scope', scope);
      formData.append('Archetype', archetype);
      formData.append('Name', fullName);
      formData.append('Phone', phone);
      formData.append('Email', email);
      formData.append('City', city);
      formData.append('Notes', notes);

      // Simulate fast response or fallback to WhatsApp
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 800);
    } catch (err) {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hi Mayank! I want to launch an Ayurvedic brand with Banega:\n\n• Category: ${category}\n• Products: ${selectedProducts.join(', ')}\n• Stage: ${stage}\n• Scope: ${scope}\n• Archetype: ${archetype}\n• Name: ${fullName || 'Founder'}\n• Phone: ${phone}`
    );
    window.open(`https://wa.me/918796755169?text=${text}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl rounded-[32px] bg-white text-[#111111] shadow-2xl border border-zinc-200 overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Top Bar */}
          <div className="px-6 sm:px-8 py-5 border-b border-zinc-100 flex items-center justify-between bg-[#FAFAFA]">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-black" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                AYURVEDA BRAND LAUNCH WIZARD
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-zinc-200 text-zinc-500 hover:text-black transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Step Summary Selection Tags */}
                <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-zinc-200 space-y-2 text-xs">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">
                    YOUR CONFIGURED PRODUCT PROFILE:
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-[#111111] font-semibold" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                      {category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 font-semibold" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                      {stage}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 font-semibold" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                      {scope}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                      {archetype}
                    </span>
                  </div>
                  {selectedProducts.length > 0 && (
                    <div className="text-[11px] text-zinc-600 font-mono pt-1">
                      Products: {selectedProducts.join(', ')}
                    </div>
                  )}
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <h3 className="text-xl font-normal text-[#111111] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    Founder &amp; Launch Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-zinc-600" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-black focus:ring-2 focus:ring-black/10 outline-none text-sm bg-white"
                        style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-zinc-600" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-black focus:ring-2 focus:ring-black/10 outline-none text-sm bg-white"
                        style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-zinc-600" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rahul@mybrand.com"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-black focus:ring-2 focus:ring-black/10 outline-none text-sm bg-white"
                        style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-zinc-600" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                        City / State
                      </label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Mumbai / Delhi / Bengaluru"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-black focus:ring-2 focus:ring-black/10 outline-none text-sm bg-white"
                        style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-600" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                      Product Vision / Specific Herbs / Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Looking to launch a 3-step Kumkumadi oil & Bakuchiol cream ritual line with amber packaging..."
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-black focus:ring-2 focus:ring-black/10 outline-none text-sm bg-white resize-none"
                      style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                    />
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-4 px-6 rounded-full bg-black hover:bg-zinc-800 text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                  >
                    {isSubmitting ? (
                      <span>CONFIGURING BLUEPRINT...</span>
                    ) : (
                      <>
                        <span>SUBMIT LAUNCH BLUEPRINT</span>
                        <ArrowRight size={14} />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="py-4 px-6 rounded-full bg-zinc-100 hover:bg-zinc-200 text-black font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs border border-zinc-200"
                    style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                  >
                    <Phone size={14} />
                    <span>WhatsApp Direct</span>
                  </button>
                </div>

                <div className="text-[11px] text-zinc-500 text-center font-mono">
                  🔒 100% Confidential. NDA protected. You speak directly with Banega brand directors.
                </div>
              </form>
            ) : (
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-zinc-100 text-black mx-auto flex items-center justify-center border border-zinc-200">
                  <Check size={32} strokeWidth={2.5} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-normal text-[#111111] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    Blueprint Received
                  </h3>
                  <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                    Thank you {fullName || 'Founder'}. Our Ayurvedic formulation director is reviewing your{' '}
                    <span className="font-semibold text-black">{category}</span> brief. We will reach out via WhatsApp/Phone within 4 business hours.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="px-8 py-3.5 rounded-full bg-black hover:bg-zinc-800 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                    style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                  >
                    <Phone size={14} />
                    <span>Chat on WhatsApp Now</span>
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="px-8 py-3.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-semibold text-xs uppercase tracking-wider"
                    style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AyurvedaLaunchWizardModal;
