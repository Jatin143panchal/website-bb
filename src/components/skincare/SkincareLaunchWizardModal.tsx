import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Check, Phone } from 'lucide-react';

export interface SkincareWizardPrefill {
  productType?: string;
  kind?: string;
  format?: string;
  purpose?: string;
  scope?: string;
  routine?: { cleanse?: string; treat?: string; hydrate?: string; protect?: string };
  products?: string[];
  totalProducts?: number;
}

interface SkincareLaunchWizardModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefill?: SkincareWizardPrefill;
}

export const SkincareLaunchWizardModal: React.FC<SkincareLaunchWizardModalProps> = ({
  isOpen,
  onClose,
  prefill,
}) => {
  const wizardPrefill: SkincareWizardPrefill = prefill || {};
  const [productType, setProductType] = useState<string>(wizardPrefill.productType || 'Serum');
  const [kind, setKind] = useState<string>(wizardPrefill.kind || 'Hydrating');
  const [format, setFormat] = useState<string>(wizardPrefill.format || 'Water-Based Fluid');
  const [scope, setScope] = useState<string>(wizardPrefill.scope || 'End-to-End Turnkey');

  // Contact info
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (prefill?.productType) setProductType(prefill.productType);
    if (prefill?.kind) setKind(prefill.kind);
    if (prefill?.format) setFormat(prefill.format);
    if (prefill?.scope) setScope(prefill.scope);
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
      // Simulate fast response
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 700);
    } catch (err) {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleWhatsAppRedirect = () => {
    const routineDetails = prefill?.routine
      ? `\n• Routine: ${prefill.routine.cleanse || ''} + ${prefill.routine.treat || ''} + ${prefill.routine.hydrate || ''} + ${prefill.routine.protect || ''}`
      : '';
    const text = encodeURIComponent(
      `Hi Mayank! I want to launch a skincare brand with Banega:\n\n• Product: ${productType}\n• Benefit: ${kind}\n• Format/Texture: ${format}\n• Scope: ${scope}${routineDetails}\n• Name: ${fullName || 'Founder'}\n• Phone: ${phone}`
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
          className="relative w-full max-w-2xl rounded-2xl bg-white text-[#111111] shadow-2xl border border-zinc-200 overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Top Bar */}
          <div className="px-6 sm:px-8 py-5 border-b border-zinc-100 flex items-center justify-between bg-[#FAFAFA]">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-black" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
                SKINCARE BRAND LAUNCH SPECIFICATION
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-zinc-100 text-zinc-500 hover:text-black transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Configuration Summary Badge Tag */}
                <div className="p-4 rounded-xl bg-[#FAFAFA] border border-zinc-200 space-y-2 text-xs">
                  <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400">
                    YOUR CONFIGURATION SUMMARY:
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-black font-medium" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                      {productType}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 font-medium" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                      {kind}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                      {format}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black text-white font-medium" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                      {scope}
                    </span>
                  </div>
                  {prefill?.routine && (
                    <div className="text-[11px] text-zinc-600 font-mono pt-1">
                      Routine: {prefill.routine.cleanse} → {prefill.routine.treat} → {prefill.routine.hydrate} → {prefill.routine.protect}
                    </div>
                  )}
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <h3 className="text-xl font-normal text-[#111111] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    Founder &amp; Launch Contact
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Ananya Sen"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black outline-none text-sm bg-white"
                        style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black outline-none text-sm bg-white"
                        style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ananya@brand.com"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black outline-none text-sm bg-white"
                        style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                        City / Region
                      </label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Mumbai / Delhi / Bengaluru"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black outline-none text-sm bg-white"
                        style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                      Product Vision / Specific Actives (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Looking to launch a 15% Vitamin C glow fluid and airless SPF 50 sunscreen line..."
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black outline-none text-sm bg-white resize-none"
                      style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                    />
                  </div>
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-4 px-6 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                  >
                    {isSubmitting ? (
                      <span>CONFIGURING SPECIFICATION...</span>
                    ) : (
                      <>
                        <span>SUBMIT SKINCARE SPECIFICATION</span>
                        <ArrowRight size={14} />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="py-4 px-6 rounded-full bg-zinc-100 hover:bg-zinc-200 text-black text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer border border-zinc-200"
                    style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                  >
                    <Phone size={14} />
                    <span>WhatsApp Direct</span>
                  </button>
                </div>

                <div className="text-[11px] text-zinc-400 text-center font-mono uppercase tracking-wider">
                  🔒 100% Confidential. NDA protected. Direct consultation with formulation specialists.
                </div>
              </form>
            ) : (
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-zinc-100 text-black mx-auto flex items-center justify-center border border-zinc-200">
                  <Check size={28} strokeWidth={2.5} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-normal text-[#111111] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    Skincare Blueprint Received
                  </h3>
                  <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                    Thank you {fullName || 'Founder'}. Our formulation director is reviewing your{' '}
                    <span className="font-semibold text-black">{productType}</span> specifications. We will reach out via WhatsApp/Phone within 4 business hours.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="px-8 py-3.5 rounded-full bg-black text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
                    style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                  >
                    <Phone size={14} />
                    <span>Chat on WhatsApp Now</span>
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="px-8 py-3.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-semibold uppercase tracking-wider"
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

export default SkincareLaunchWizardModal;
