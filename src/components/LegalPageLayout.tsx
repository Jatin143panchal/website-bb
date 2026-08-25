import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Navbar } from './Navbar';
import { MainFooter } from './MainFooter';

interface LegalPageLayoutProps {
  badge: string;
  title: string;
  children: React.ReactNode;
}

export const LegalPageLayout = ({ badge, title, children }: LegalPageLayoutProps) => (
  <div className="relative bg-[#FAFAFA] text-[#111111] selection:bg-[#D97706] selection:text-white font-sans overflow-x-hidden min-h-screen">
    <Helmet>
      <title>{`${title} | Banega Brand – India's Leading Product Launch Company`}</title>
      <meta name="robots" content="noindex, follow" />
    </Helmet>
    <Navbar />

    <main className="pt-24">
      <section className="py-16 lg:py-20 px-6 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFAFA] border border-[#EAEAEA] text-[10px] font-black uppercase tracking-[0.2em] text-[#D97706]">
            {badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-sans font-black uppercase tracking-tight text-[#111111] leading-tight">
            {title}
          </h1>
          <p className="text-xs font-bold text-[#666666] uppercase tracking-widest">
            Last Updated: June 2026
          </p>
        </div>
      </section>

      <section className="py-16 px-6 pb-24">
        <div className="max-w-4xl mx-auto bg-white border border-[#EAEAEA] rounded-[36px] p-8 md:p-12 shadow-sm">
          {children}
        </div>
      </section>
    </main>

    <MainFooter />
  </div>
);

export const LegalIntro = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm font-semibold text-[#666666] leading-relaxed mb-6">{children}</p>
);

export const LegalSection = ({
  title,
  children,
  first,
}: {
  title: string;
  children: React.ReactNode;
  first?: boolean;
}) => (
  <section className={first ? 'mb-2' : 'mt-10 pt-8 border-t border-[#EAEAEA]'}>
    <h2 className="text-lg md:text-xl font-black uppercase tracking-tight text-[#111111] mb-4">
      {title}
    </h2>
    {children}
  </section>
);

export const LegalSubSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mt-6">
    <h3 className="text-sm md:text-base font-black uppercase tracking-wide text-[#111111] mb-3">
      {title}
    </h3>
    {children}
  </div>
);

export const LegalParagraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm font-semibold text-[#666666] leading-relaxed mb-4">{children}</p>
);

export const LegalList = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="space-y-2.5 mb-4">
    {items.map((item, idx) => (
      <li key={idx} className="flex gap-3 text-sm font-semibold text-[#666666] leading-relaxed">
        <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] mt-2 shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const LegalContact = ({
  email,
  phone,
}: {
  email?: string;
  phone?: string;
}) => (
  <div className="mt-4 p-6 bg-[#FAFAFA] border border-[#EAEAEA] rounded-2xl space-y-2">
    {email && (
      <a
        href={`mailto:${email}`}
        className="block text-sm font-bold text-[#666666] hover:text-[#D97706] transition-colors"
      >
        Email: {email}
      </a>
    )}
    {phone && (
      <a
        href={`tel:${phone.replace(/\s/g, '')}`}
        className="block text-sm font-bold text-[#666666] hover:text-[#D97706] transition-colors"
      >
        Phone: {phone}
      </a>
    )}
  </div>
);
