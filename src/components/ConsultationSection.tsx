import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export const ConsultationSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    industry: 'Luxury Perfume',
    budget: '₹5 Lakhs - ₹15 Lakhs',
    timeline: '30-60 Days',
    stage: 'Just an Idea',
    idea: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "5eda95b0-84fb-4620-8e31-abaa006328c2",
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
            industry: 'Luxury Perfume',
            budget: '₹5 Lakhs - ₹15 Lakhs',
            timeline: '30-60 Days',
            stage: 'Just an Idea',
            idea: ''
          });
        }, 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <section className="relative py-24 md:py-32 text-[#111111] overflow-hidden border-t border-zinc-200 font-sans" id="consultation">
      
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/assets/4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/90 via-[#FAFAFA]/80 to-[#FAFAFA]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Editorial Content */}
          <div className="space-y-8 lg:sticky lg:top-32 text-left">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D97706] block">
                THE EXECUTION LAUNCHPAD
              </span>
              
              <h2 className="text-4xl md:text-6xl font-sans font-black tracking-tight uppercase leading-[0.95]">
                Start Your <br />
                <span className="text-[#D97706]">Brand Journey</span>
              </h2>
              
              <p className="text-lg md:text-xl text-[#666666] font-bold leading-relaxed max-w-lg">
                Tell us your idea — even if it's just a concept. We'll map out the exact steps to take it from raw idea to shelves across India.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-zinc-200">
              {[
                'End-to-end execution — formula to marketplace',
                'GMP-certified factory network across India',
                'Launched 215+ brands across Amazon, Flipkart & Nykaa'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D97706]/10 flex items-center justify-center text-[#D97706]">
                    <CheckCircle2 size={12} className="stroke-[3]" />
                  </div>
                  <span className="text-sm font-black text-[#111111] uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp Quick Connect */}
            <a
              href="https://wa.me/918796755169?text=Hi%20Mayank%2C%20I%20want%20to%20launch%20my%20brand%20with%20BanegaBrand!"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-200 active:scale-95 shadow-md"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp — Instant Reply
            </a>

            <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-sm border border-zinc-200 shadow-sm inline-block max-w-md">
              <span className="text-[8px] font-mono tracking-widest text-zinc-400 font-black uppercase block mb-1">
                OUR SLA PLEDGE
              </span>
              <p className="text-xs font-bold text-[#666666] leading-relaxed italic">
                "No pressure. No spam. Just operational clarity to transform raw chemical ideas into market-ready brands."
              </p>
            </div>
          </div>

          {/* Right Side: High-converting interactive input fields Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-[40px] shadow-md border border-zinc-200 relative"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="py-16 text-center space-y-6"
                >
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                    <CheckCircle2 size={32} className="stroke-[2.5]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#111111]">LAUNCH INITIATED!</h3>
                  <p className="text-[#666666] font-bold text-xs max-w-xs mx-auto leading-relaxed">
                    We received your submission. An expert packaging and lab-sourcing strategist will reach out to you within 24 business hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5 text-left" 
                  onSubmit={handleSubmit}
                >
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-zinc-405 block">
                      Full Name
                    </label>
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g., Aditya Sen" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 bg-[#FAFAFA]/80 backdrop-blur-sm border border-zinc-200 rounded-2xl font-bold text-sm text-[#111111] focus:bg-white focus:ring-2 focus:ring-[#D97706] transition-all outline-none" 
                    />
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-zinc-405 block">
                        Phone Number
                      </label>
                      <input 
                        required 
                        type="tel" 
                        placeholder="e.g., +91 87967 55169" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-5 py-4 bg-[#FAFAFA]/80 backdrop-blur-sm border border-zinc-200 rounded-2xl font-bold text-sm text-[#111111] focus:bg-white focus:ring-2 focus:ring-[#D97706] transition-all outline-none" 
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-zinc-405 block">
                        Email Address
                      </label>
                      <input 
                        required 
                        type="email" 
                        placeholder="e.g., aditya@somabotanicals.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-4 bg-[#FAFAFA]/80 backdrop-blur-sm border border-zinc-200 rounded-2xl font-bold text-sm text-[#111111] focus:bg-white focus:ring-2 focus:ring-[#D97706] transition-all outline-none" 
                      />
                    </div>
                  </div>

                  {/* Industry & Budget Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-zinc-405 block">
                        Industry Category
                      </label>
                      <select 
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-5 py-4 bg-[#FAFAFA]/80 backdrop-blur-sm border border-zinc-200 rounded-2xl font-bold text-sm text-[#111111] focus:bg-white focus:ring-2 focus:ring-[#D97706] transition-all outline-none cursor-pointer"
                      >
                        <option>Luxury Perfume</option>
                        <option>Modern Ayurveda</option>
                        <option>Cosmetics</option>
                        <option>Nutraceuticals</option>
                        <option>Personal Care</option>
                        <option>Pet Care</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-zinc-405 block">
                        Budget Segment
                      </label>
                      <select 
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-5 py-4 bg-[#FAFAFA]/80 backdrop-blur-sm border border-zinc-200 rounded-2xl font-bold text-sm text-[#111111] focus:bg-white focus:ring-2 focus:ring-[#D97706] transition-all outline-none cursor-pointer"
                      >
                        <option>Under ₹5 Lakhs</option>
                        <option>₹5 Lakhs - ₹15 Lakhs</option>
                        <option>₹15 Lakhs - ₹30 Lakhs</option>
                        <option>₹30 Lakhs+</option>
                      </select>
                    </div>
                  </div>

                  {/* Timeline & Current Stage Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-zinc-405 block">
                        Launch Timeline
                      </label>
                      <select 
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-5 py-4 bg-[#FAFAFA]/80 backdrop-blur-sm border border-zinc-200 rounded-2xl font-bold text-sm text-[#111111] focus:bg-white focus:ring-2 focus:ring-[#D97706] transition-all outline-none cursor-pointer"
                      >
                        <option>Under 30 Days</option>
                        <option>30-60 Days</option>
                        <option>60-90 Days</option>
                        <option>Flexible</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-zinc-405 block">
                        Current Stage
                      </label>
                      <select 
                        value={formData.stage}
                        onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                        className="w-full px-5 py-4 bg-[#FAFAFA]/80 backdrop-blur-sm border border-zinc-200 rounded-2xl font-bold text-sm text-[#111111] focus:bg-white focus:ring-2 focus:ring-[#D97706] transition-all outline-none cursor-pointer"
                      >
                        <option>Just an Idea</option>
                        <option>Sampling</option>
                        <option>Ready to Manufacture</option>
                        <option>Fully Operational</option>
                      </select>
                    </div>
                  </div>

                  {/* Textarea description */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-zinc-405 block">
                      Tell Us About Your Idea
                    </label>
                    <textarea 
                      required 
                      rows={3} 
                      placeholder="Briefly describe your vision, target client, or packaging hope..." 
                      value={formData.idea}
                      onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                      className="w-full px-5 py-4 bg-[#FAFAFA]/80 backdrop-blur-sm border border-zinc-200 rounded-2xl font-bold text-sm text-[#111111] focus:bg-white focus:ring-2 focus:ring-[#D97706] transition-all outline-none resize-none" 
                    />
                  </div>

                  {/* Submit button */}
                  <button 
                    type="submit" 
                    className="w-full py-5 bg-[#D97706] hover:bg-[#111111] text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 leading-none mt-2 shadow-lg cursor-pointer group"
                  >
                    <span>🚀 Start My Brand Launch — Free Consultation</span>
                    <Send size={15} className="text-white group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-center text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    No Spam. No Pressure. Expert Response Within 24 Hours.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Glowing blur ball */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D97706]/5 rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};