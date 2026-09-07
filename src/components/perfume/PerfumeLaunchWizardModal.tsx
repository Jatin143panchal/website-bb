import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, ArrowRight, ArrowLeft, Loader2, CheckCircle2, MessageSquare, Check } from 'lucide-react';
import gsap from 'gsap';

export interface PerfumeWizardPrefill {
  archetype?: string;
  scope?: string;
  investmentTier?: string;
  genderFocus?: string;
}

interface PerfumeLaunchWizardModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefill?: PerfumeWizardPrefill;
}

const ARCHETYPES = [
  { id: 'luxury', name: 'Luxury Fragrance', desc: 'Heavy glass flacons, zamak caps, 25–30% Extrait de Parfum.' },
  { id: 'niche', name: 'Niche / Artisan', desc: 'Distinctive accords, rare notes, bespoke narrative storytelling.' },
  { id: 'everyday', name: 'Everyday Premium', desc: 'Accessible luxury, crowd-pleasing longevity, D2C unit economics.' },
  { id: 'signature', name: 'Signature Collection', desc: 'Complete 3–5 SKU fragrance architecture with unified luxury.' },
];

const SCOPES = [
  { id: 'product', name: 'Product Only', desc: 'Fragrance formulation, IFRA compounding, bottle sourcing & batch filling.', tag: 'Formulation + Sourcing' },
  { id: 'brand_product', name: 'Brand + Product', desc: 'Custom fragrance, bespoke bottle/box design, brand identity & renders.', tag: 'Design + Formulation' },
  { id: 'end_to_end', name: 'End-to-End Turnkey', desc: 'Full launch: formula, custom glass mold, unboxing, brand, Shopify D2C & retail onboarding.', tag: 'Recommended' },
];

const INVESTMENT_TIERS = [
  { id: 'starter', name: 'Starter Launch', units: '100 – 500 Units', desc: 'Concept testing, 1 Signature EDP SKU, luxury curated flacon & mono-carton packaging.' },
  { id: 'premium', name: 'Premium D2C Launch', units: '500 – 2,000 Units', desc: 'Full brand launch, 2–3 SKUs, heavy custom bottles, rigid magnetic gift boxes & ad funnel.' },
  { id: 'signature', name: 'Signature Flagship', units: '5,000+ Units', desc: 'Bespoke custom glass tooling, discovery sets, Extrait formulas & omnichannel distribution.' },
];

const STEP_LABELS = ['Archetype', 'Scope', 'Scale', 'Contact'];

export const PerfumeLaunchWizardModal: React.FC<PerfumeLaunchWizardModalProps> = ({
  isOpen,
  onClose,
  prefill,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedArchetype, setSelectedArchetype] = useState<string>('luxury');
  const [selectedGender, setSelectedGender] = useState<string>('unisex');
  const [selectedScope, setSelectedScope] = useState<string>('end_to_end');
  const [selectedTier, setSelectedTier] = useState<string>('premium');
  const [direction, setDirection] = useState<number>(1); // 1 = forward, -1 = backward

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    brandName: '',
    timeline: '30–60 Days',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const lineRef = useRef<HTMLDivElement>(null);

  // Animate progress line on step change
  useEffect(() => {
    if (!lineRef.current) return;
    gsap.to(lineRef.current, {
      width: `${((step - 1) / 3) * 100}%`,
      duration: 0.5,
      ease: 'power2.inOut',
    });
  }, [step]);

  useEffect(() => {
    if (isOpen) {
      if (prefill?.archetype) setSelectedArchetype(prefill.archetype);
      if (prefill?.scope) setSelectedScope(prefill.scope);
      if (prefill?.investmentTier) setSelectedTier(prefill.investmentTier);
      if (prefill?.genderFocus) setSelectedGender(prefill.genderFocus);
      setStep(1);
      setIsSuccess(false);
      setErrorMessage('');
    }
  }, [isOpen, prefill]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const goNext = () => {
    setDirection(1);
    setStep((s) => Math.min(4, s + 1));
  };

  const goBack = () => {
    setDirection(-1);
    setStep((s) => Math.max(1, s - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const payload = {
        access_key: '5eda95b0-84fb-4620-8e31-abaa006328c2',
        subject: `[PERFUME LAUNCH WIZARD] New Inquiry from ${formData.name || 'Founder'}`,
        'Category': 'Perfume & Fragrance Launch',
        'Selected Archetype': ARCHETYPES.find((a) => a.id === selectedArchetype)?.name || selectedArchetype,
        'Gender Positioning': selectedGender.toUpperCase(),
        'Selected Scope': SCOPES.find((s) => s.id === selectedScope)?.name || selectedScope,
        'Target Scale': INVESTMENT_TIERS.find((t) => t.id === selectedTier)?.name + ' (' + (INVESTMENT_TIERS.find((t) => t.id === selectedTier)?.units || '') + ')',
        'Founder Name': formData.name,
        'Phone / WhatsApp': formData.phone,
        'Email': formData.email,
        'Brand Name': formData.brandName || 'In Concept Stage',
        'Notes': formData.notes || 'None',
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (result.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(result.message || 'Failed to submit. Please message us directly.');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Network error. You can also connect with us on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const archetypeName = ARCHETYPES.find((a) => a.id === selectedArchetype)?.name || 'Perfume';
    const scopeName = SCOPES.find((s) => s.id === selectedScope)?.name || 'Turnkey Launch';
    const msg = encodeURIComponent(
      `Hi! I want to launch my Perfume Brand with Banega.\n\n*Archetype:* ${archetypeName}\n*Scope:* ${scopeName}\n*Name:* ${formData.name || 'Founder'}\n*Brand:* ${formData.brandName || 'New Brand'}`
    );
    window.open(`https://wa.me/918796755169?text=${msg}`, '_blank');
  };

  const variants = {
    enter: (d: number) => ({ x: d * 40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d * -40, opacity: 0 }),
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-xl bg-white text-[#111111] rounded-2xl shadow-2xl overflow-hidden select-none"
        style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-8 pt-8 pb-0">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <div className="w-4 h-px bg-zinc-400" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                Perfume Launch
              </span>
            </div>
            <h3
              className="text-xl font-normal text-[#111111] tracking-tight uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Launch Blueprint
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-zinc-200 hover:border-zinc-400 text-zinc-400 hover:text-black flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close"
          >
            <X size={14} />
          </button>
        </div>

        {/* Progress Bar */}
        {!isSuccess && (
          <div className="px-8 pt-6 pb-0">
            {/* Step labels */}
            <div className="flex justify-between mb-2">
              {STEP_LABELS.map((label, i) => (
                <span
                  key={label}
                  className={`text-[10px] font-mono uppercase tracking-widest transition-colors ${
                    step === i + 1 ? 'text-black' : step > i + 1 ? 'text-zinc-400' : 'text-zinc-300'
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
            {/* Track */}
            <div className="relative h-px bg-zinc-100 w-full">
              <div
                ref={lineRef}
                className="absolute left-0 top-0 h-full bg-black"
                style={{ width: '0%' }}
              />
            </div>
          </div>
        )}

        {/* Body */}
        <div className="px-8 py-8 min-h-[320px] overflow-y-auto" style={{ maxHeight: '70vh' }}>
          <AnimatePresence mode="wait" custom={direction}>
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="py-4 text-center space-y-6"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={24} className="text-black" />
                </div>
                <div className="space-y-2">
                  <h4
                    className="text-2xl font-normal text-black uppercase"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Request Received.
                  </h4>
                  <p className="text-sm text-zinc-500 leading-relaxed max-w-sm mx-auto">
                    Thank you, <span className="text-black font-medium">{formData.name}</span>. Our launch specialists are preparing your custom fragrance roadmap.
                  </p>
                </div>

                {/* Summary - no box, just ruled lines */}
                <div className="divide-y divide-zinc-100 text-sm max-w-xs mx-auto text-left">
                  <div className="flex justify-between py-2.5">
                    <span className="text-zinc-400 text-xs">Archetype</span>
                    <span className="text-black text-xs font-medium">{ARCHETYPES.find((a) => a.id === selectedArchetype)?.name}</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-zinc-400 text-xs">Launch Scope</span>
                    <span className="text-black text-xs font-medium">{SCOPES.find((s) => s.id === selectedScope)?.name}</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-zinc-400 text-xs">Volume</span>
                    <span className="text-black text-xs font-medium">{INVESTMENT_TIERS.find((t) => t.id === selectedTier)?.units}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={openWhatsApp}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-medium uppercase tracking-widest transition-all cursor-pointer"
                  >
                    <MessageSquare size={13} />
                    WhatsApp Connect
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-200 hover:border-zinc-400 text-zinc-600 text-xs font-medium uppercase tracking-widest transition-all cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={step}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >

                {/* STEP 1 */}
                {step === 1 && (
                  <div className="space-y-7">
                    <div className="space-y-1">
                      <h4
                        className="text-xl font-normal text-[#111111] uppercase"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        What are you building?
                      </h4>
                      <p className="text-xs text-zinc-400">Select your perfume brand archetype.</p>
                    </div>

                    {/* Gender pills */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                        Gender Positioning
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { id: 'unisex', label: 'Unisex' },
                          { id: 'men', label: "Men's" },
                          { id: 'women', label: "Women's" },
                          { id: 'not_sure', label: 'Not Sure' },
                        ].map((chip) => (
                          <button
                            key={chip.id}
                            type="button"
                            onClick={() => setSelectedGender(chip.id)}
                            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer border ${
                              selectedGender === chip.id
                                ? 'bg-black text-white border-black'
                                : 'bg-white text-zinc-500 border-zinc-200 hover:border-zinc-400'
                            }`}
                          >
                            {chip.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Archetype list — NO BOX, just horizontal rules */}
                    <div className="divide-y divide-zinc-100">
                      {ARCHETYPES.map((arch) => {
                        const isSelected = selectedArchetype === arch.id;
                        return (
                          <div
                            key={arch.id}
                            onClick={() => setSelectedArchetype(arch.id)}
                            className="group flex items-start gap-4 py-4 cursor-pointer hover:pl-1 transition-all duration-200"
                          >
                            {/* Radio indicator */}
                            <div
                              className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                                isSelected ? 'border-black bg-black' : 'border-zinc-300 group-hover:border-zinc-500'
                              }`}
                            >
                              {isSelected && <Check size={9} className="text-white" strokeWidth={3} />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <h5
                                  className={`text-sm font-medium transition-colors ${isSelected ? 'text-black' : 'text-zinc-600 group-hover:text-black'}`}
                                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                                >
                                  {arch.name}
                                </h5>
                              </div>
                              <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">{arch.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div className="space-y-7">
                    <div className="space-y-1">
                      <h4
                        className="text-xl font-normal text-[#111111] uppercase"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        How much do we handle?
                      </h4>
                      <p className="text-xs text-zinc-400">Choose your launch scope.</p>
                    </div>

                    <div className="divide-y divide-zinc-100">
                      {SCOPES.map((sc) => {
                        const isSelected = selectedScope === sc.id;
                        return (
                          <div
                            key={sc.id}
                            onClick={() => setSelectedScope(sc.id)}
                            className="group flex items-start gap-4 py-5 cursor-pointer hover:pl-1 transition-all duration-200"
                          >
                            <div
                              className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                                isSelected ? 'border-black bg-black' : 'border-zinc-300 group-hover:border-zinc-500'
                              }`}
                            >
                              {isSelected && <Check size={9} className="text-white" strokeWidth={3} />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-baseline justify-between gap-2 flex-wrap">
                                <h5
                                  className={`text-sm font-medium transition-colors ${isSelected ? 'text-black' : 'text-zinc-600 group-hover:text-black'}`}
                                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                                >
                                  {sc.name}
                                </h5>
                                <span className={`text-[10px] font-mono uppercase tracking-wider shrink-0 ${isSelected ? 'text-black' : 'text-zinc-400'}`}>
                                  {sc.tag}
                                </span>
                              </div>
                              <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">{sc.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div className="space-y-7">
                    <div className="space-y-1">
                      <h4
                        className="text-xl font-normal text-[#111111] uppercase"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        Planned launch volume?
                      </h4>
                      <p className="text-xs text-zinc-400">Scale determines batch size, glass tooling & unit cost.</p>
                    </div>

                    <div className="divide-y divide-zinc-100">
                      {INVESTMENT_TIERS.map((tier) => {
                        const isSelected = selectedTier === tier.id;
                        return (
                          <div
                            key={tier.id}
                            onClick={() => setSelectedTier(tier.id)}
                            className="group flex items-start gap-4 py-5 cursor-pointer hover:pl-1 transition-all duration-200"
                          >
                            <div
                              className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                                isSelected ? 'border-black bg-black' : 'border-zinc-300 group-hover:border-zinc-500'
                              }`}
                            >
                              {isSelected && <Check size={9} className="text-white" strokeWidth={3} />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-baseline justify-between gap-2 flex-wrap">
                                <h5
                                  className={`text-sm font-medium transition-colors ${isSelected ? 'text-black' : 'text-zinc-600 group-hover:text-black'}`}
                                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                                >
                                  {tier.name}
                                </h5>
                                <span className={`text-xs font-mono shrink-0 ${isSelected ? 'text-black' : 'text-zinc-400'}`}>
                                  {tier.units}
                                </span>
                              </div>
                              <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">{tier.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <p className="text-[11px] text-zinc-400">
                      * Exact quote depends on bottle customisation, fragrance concentration (18–30% EDP/Extrait), and packaging requirements.
                    </p>
                  </div>
                )}

                {/* STEP 4 */}
                {step === 4 && (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1">
                      <h4
                        className="text-xl font-normal text-[#111111] uppercase"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        Send your blueprint.
                      </h4>
                      <p className="text-xs text-zinc-400">We'll prepare your turnkey quote and fragrance roadmap.</p>
                    </div>

                    <div className="space-y-4 pt-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your name"
                            className="w-full border-b border-zinc-200 focus:border-black py-2 text-sm text-black placeholder:text-zinc-300 bg-transparent outline-none transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">WhatsApp *</label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 98765 43210"
                            className="w-full border-b border-zinc-200 focus:border-black py-2 text-sm text-black placeholder:text-zinc-300 bg-transparent outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Email *</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="you@email.com"
                            className="w-full border-b border-zinc-200 focus:border-black py-2 text-sm text-black placeholder:text-zinc-300 bg-transparent outline-none transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Brand Name</label>
                          <input
                            type="text"
                            name="brandName"
                            value={formData.brandName}
                            onChange={handleInputChange}
                            placeholder="e.g. Aurum Scents"
                            className="w-full border-b border-zinc-200 focus:border-black py-2 text-sm text-black placeholder:text-zinc-300 bg-transparent outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Scent Idea / Timeline</label>
                        <textarea
                          name="notes"
                          rows={2}
                          value={formData.notes}
                          onChange={handleInputChange}
                          placeholder="e.g. Woody Amber luxury EDP, launching before Diwali..."
                          className="w-full border-b border-zinc-200 focus:border-black py-2 text-sm text-black placeholder:text-zinc-300 bg-transparent outline-none transition-colors resize-none"
                        />
                      </div>
                    </div>

                    {errorMessage && (
                      <p className="text-xs text-red-500">{errorMessage}</p>
                    )}

                    <div className="pt-1">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-6 rounded-full bg-black hover:bg-zinc-800 text-white font-medium text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <span>Get Launch Blueprint</span>
                            <ArrowRight size={13} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer navigation */}
        {!isSuccess && (
          <div className="flex items-center justify-between px-8 py-5 border-t border-zinc-100">
            {step > 1 ? (
              <button
                type="button"
                onClick={goBack}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-black uppercase tracking-widest transition-colors cursor-pointer"
              >
                <ArrowLeft size={12} />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={goNext}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-medium uppercase tracking-widest transition-all cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRight size={12} />
              </button>
            ) : null}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default PerfumeLaunchWizardModal;
