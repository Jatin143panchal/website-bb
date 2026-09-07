import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, MessageSquare, Loader2, Send } from 'lucide-react';

interface ContactFormState {
  name: string;
  organization: string;
  email: string;
  phone: string;
  link: string;
  services: string[];
  message: string;
}

const SERVICE_TAGS = [
  'Perfume & Fragrance',
  'Cosmetics & Skincare',
  'Ayurvedic Formulation',
  'Custom Packaging & 3D',
  'Amazon / Nykaa Listing',
  'End-to-End Brand Launch',
];

export const SchbangContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    organization: '',
    email: '',
    phone: '',
    link: '',
    services: [],
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const payload = {
        access_key: '5eda95b0-84fb-4620-8e31-abaa006328c2',
        subject: `New Inquiry from ${formData.name || 'Website Visitor'} (${formData.organization || 'Individual'})`,
        'Full Name': formData.name,
        'Organization / Brand': formData.organization || 'Not provided',
        'Email Address': formData.email,
        'Phone Number': formData.phone,
        'Website / Social Link': formData.link || 'Not provided',
        'Selected Services': formData.services.length > 0 ? formData.services.join(', ') : 'Not selected',
        'Project Details': formData.message || 'No specific details provided',
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (result.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(result.message || 'Failed to submit form. Please try again or message us on WhatsApp.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage('Network error occurred. Please try again or reach out on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi Mayank! I want to launch my brand with Banega Brand. My name is ${formData.name || ''}.`
    );
    window.open(`https://wa.me/918796755169?text=${msg}`, '_blank');
  };

  return (
    <section id="contact-us" className="w-full bg-white text-[#111111] overflow-hidden border-t border-zinc-200">
      <div className="max-w-[1720px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[900px]">
          
          {/* ── LEFT COLUMN: MINIMALIST SCHBANG FORM ───────────────────────────── */}
          <div className="lg:col-span-6 xl:col-span-6 px-6 sm:px-12 md:px-16 lg:px-20 py-16 sm:py-24 lg:py-32 flex flex-col justify-center">
            <div className="max-w-xl">
              
              {/* Eyebrow & Main Title */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-black shrink-0" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
                    GOT AN IDEA?
                  </span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-[#111111] leading-tight">
                  Drop Us A Message
                </h2>
              </div>

              {/* Subtitle / Direct Contact Info */}
              <div className="space-y-2 text-sm sm:text-base text-zinc-600 font-normal leading-relaxed mb-12">
                <p>
                  We're excited to work with you soon! Please drop an email with your details &amp; requirements to{' '}
                  <a
                    href="mailto:contact@banegabrand.com"
                    className="font-bold text-[#111111] hover:text-[#FF5722] underline underline-offset-4 transition-colors"
                  >
                    contact@banegabrand.com
                  </a>
                  .
                </p>
                <p className="text-zinc-500">
                  You can also fill this form &amp; we'll get back in 2 business days.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 sm:p-10 space-y-5 text-left"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 size={24} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#111111]">
                      Thank you for reaching out!
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      We've received your requirements. Our product launch team will review your project and get back to you within 2 business days.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          organization: '',
                          email: '',
                          phone: '',
                          link: '',
                          services: [],
                          message: '',
                        });
                      }}
                      className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black underline underline-offset-4 hover:text-[#FF5722] cursor-pointer"
                    >
                      Send Another Message
                    </button>
                    <button
                      type="button"
                      onClick={openWhatsApp}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#20b858] transition-colors cursor-pointer"
                    >
                      <MessageSquare size={14} />
                      WhatsApp Direct
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 text-left">
                  
                  {/* Field 1: Your Name */}
                  <div className="relative group">
                    <label 
                      htmlFor="name" 
                      className="block text-sm sm:text-base font-medium text-zinc-700 mb-1 group-focus-within:text-black transition-colors"
                    >
                      Your Name <span className="text-zinc-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-transparent border-0 border-b border-zinc-300 py-3 text-base text-zinc-900 placeholder:text-zinc-300 focus:border-black focus:ring-0 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Field 2: Your Organization's Name */}
                  <div className="relative group">
                    <label 
                      htmlFor="organization" 
                      className="block text-sm sm:text-base font-medium text-zinc-700 mb-1 group-focus-within:text-black transition-colors"
                    >
                      Your Organization's Name
                    </label>
                    <input
                      id="organization"
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="e.g. Luxe Fragrances Pvt Ltd or Independent"
                      className="w-full bg-transparent border-0 border-b border-zinc-300 py-3 text-base text-zinc-900 placeholder:text-zinc-300 focus:border-black focus:ring-0 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Field 3: Your Email */}
                  <div className="relative group">
                    <label 
                      htmlFor="email" 
                      className="block text-sm sm:text-base font-medium text-zinc-700 mb-1 group-focus-within:text-black transition-colors"
                    >
                      Your Email <span className="text-zinc-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. rahul@example.com"
                      className="w-full bg-transparent border-0 border-b border-zinc-300 py-3 text-base text-zinc-900 placeholder:text-zinc-300 focus:border-black focus:ring-0 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Field 4: Your Number */}
                  <div className="relative group">
                    <label 
                      htmlFor="phone" 
                      className="block text-sm sm:text-base font-medium text-zinc-700 mb-1 group-focus-within:text-black transition-colors"
                    >
                      Your Number <span className="text-zinc-400">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-transparent border-0 border-b border-zinc-300 py-3 text-base text-zinc-900 placeholder:text-zinc-300 focus:border-black focus:ring-0 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Field 5: Website/Social Media Link */}
                  <div className="relative group">
                    <label 
                      htmlFor="link" 
                      className="block text-sm sm:text-base font-medium text-zinc-700 mb-1 group-focus-within:text-black transition-colors"
                    >
                      Website/Social Media Link
                    </label>
                    <input
                      id="link"
                      type="text"
                      name="link"
                      value={formData.link}
                      onChange={handleInputChange}
                      placeholder="https://instagram.com/yourbrand or website URL"
                      className="w-full bg-transparent border-0 border-b border-zinc-300 py-3 text-base text-zinc-900 placeholder:text-zinc-300 focus:border-black focus:ring-0 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Field 6: Service Category Selection */}
                  <div className="pt-2 space-y-3">
                    <span className="block text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-500">
                      Services you are interested in:
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {SERVICE_TAGS.map((service) => {
                        const isSelected = formData.services.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => toggleService(service)}
                            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer border ${
                              isSelected
                                ? 'bg-black text-white border-black shadow-xs'
                                : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:border-zinc-400'
                            }`}
                          >
                            {isSelected ? '✓ ' : '+ '}
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Field 7: Project Details / Message */}
                  <div className="relative group pt-2">
                    <label 
                      htmlFor="message" 
                      className="block text-sm sm:text-base font-medium text-zinc-700 mb-1 group-focus-within:text-black transition-colors"
                    >
                      Tell us about your brand vision or requirement
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Briefly describe your product category, target launch date, and specific needs..."
                      className="w-full bg-transparent border-0 border-b border-zinc-300 py-3 text-base text-zinc-900 placeholder:text-zinc-300 focus:border-black focus:ring-0 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-medium">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button & Direct WhatsApp Trigger */}
                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-full bg-black text-white font-bold text-sm uppercase tracking-wider hover:bg-[#FF5722] active:scale-[0.98] transition-all duration-300 shadow-md disabled:opacity-50 cursor-pointer group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Details...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Details</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={openWhatsApp}
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-zinc-100 hover:bg-[#25D366] hover:text-white text-zinc-800 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer"
                    >
                      <MessageSquare size={16} />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-xs text-zinc-400 font-normal">
                    * By submitting, you agree to our direct response policy. All brand formulations and proprietary ideas remain 100% confidential under NDA.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* ── RIGHT COLUMN: FULL-BLEED LUXURY PRODUCT SHOWCASE ────────────────── */}
          <div className="lg:col-span-6 xl:col-span-6 bg-[#0E0E0E] flex flex-col justify-between overflow-hidden relative">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FF5722]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Vertical Stack of Clean Product Photos matching Reference */}
            <div className="w-full h-full flex flex-col divide-y divide-zinc-900">
              
              {/* Card 1: Cosmetics CC Cream & Foundation Swatches Flatlay */}
              <div className="relative group overflow-hidden flex-1 min-h-[420px] sm:min-h-[460px] bg-[#F5E6DD]">
                <img
                  src="/assets/contact/cosmetics_flatlay.jpg"
                  alt="Luxury Cosmetics & Skincare Foundation Swatches"
                  className="w-full h-full object-cover object-center filter brightness-[1.01] transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 sm:p-10">
                  <div className="text-white">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF5722] block mb-1.5">
                      Lab Formulation &amp; Compounding
                    </span>
                    <h4 className="text-lg sm:text-2xl font-bold tracking-tight">
                      Cosmetics, CC Creams &amp; Skincare Formulations
                    </h4>
                  </div>
                </div>
              </div>

              {/* Card 2: Amber Luxury Perfume on Marble Water */}
              <div className="relative group overflow-hidden flex-1 min-h-[420px] sm:min-h-[460px] bg-zinc-950">
                <img
                  src="/assets/contact/luxury_perfume_flatlay.jpg"
                  alt="Luxury Amber Perfume Bottle on Water Marble"
                  className="w-full h-full object-cover object-center filter brightness-[0.96] transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 sm:p-10">
                  <div className="text-white">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF5722] block mb-1.5">
                      Fine Fragrance Architecture
                    </span>
                    <h4 className="text-lg sm:text-2xl font-bold tracking-tight">
                      Luxury Eau De Parfum &amp; Custom Scent Engineering
                    </h4>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SchbangContactSection;
