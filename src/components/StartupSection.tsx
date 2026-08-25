import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Check, Zap, Shield, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-8 rounded-3xl border border-gray-100 bg-white hover:border-gray-200 transition-all hover:shadow-xl group">
    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
      <Icon className="w-6 h-6 text-black" />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export const StartupSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-20 md:py-32 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4 block">Core Features</span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">A layout that keeps your <br className="hidden md:block" /> day clear.</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to build, track, and optimize your routines with minimal effort.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-card">
            <FeatureCard 
              icon={Zap}
              title="Flexible streak rules" 
              description="Customize how you track consistency. Whether it's daily, weekly, or specific days, we adjust to your life." 
            />
          </div>
          <div className="feature-card">
            <FeatureCard 
              icon={Smartphone}
              title="Smart daily planner" 
              description="Our AI-powered planner organizes your tasks based on priority and your energy levels." 
            />
          </div>
          <div className="feature-card">
            <FeatureCard 
              icon={Shield}
              title="Routine stacks" 
              description="Group related habits together to form powerful morning or evening routines that stick." 
            />
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center gap-12 bg-[#0f172a] text-white p-12 rounded-[3rem] overflow-hidden relative border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#b45309]/5 rounded-full blur-[100px] -mr-48 -mt-48" />
          
          <div className="flex-1 z-10">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Adapted for the way you live and work</h3>
            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              We understand that consistency isn't about being perfect every day. It's about showing up even when things get busy.
            </p>
            <ul className="space-y-4">
              {['Weekly reflections', 'Gentle reminders', 'Routine insights'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#b45309]/20 rounded-full flex items-center justify-center">
                    <Check className="text-[#b45309] w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 w-full md:w-auto h-80 md:h-[400px] bg-[#1e293b] rounded-[2.5rem] border border-slate-800 flex items-center justify-center z-10 overflow-hidden group">
             <div className="text-white/10 group-hover:scale-125 transition-transform duration-1000 ease-out">
               <Smartphone size={160} strokeWidth={0.5} />
             </div>
             <div className="absolute inset-0 bg-gradient-to-br from-[#b45309]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};
