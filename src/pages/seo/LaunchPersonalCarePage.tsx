import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../../components/Navbar';
import { FigmaFooter } from '../../components/FigmaFooter';

// Dedicated Skincare & Clinical Derma Components
import { SkincareHero } from '../../components/skincare/SkincareHero';
import { SkincareProductCategoriesSection } from '../../components/skincare/SkincareProductCategoriesSection';
import { SkincareManufacturingSection } from '../../components/skincare/SkincareManufacturingSection';
import { SkincareFaqSection } from '../../components/skincare/SkincareFaqSection';

// Interactive Guided Launch Modal & Sticky CTA
import { SkincareLaunchWizardModal, SkincareWizardPrefill } from '../../components/skincare/SkincareLaunchWizardModal';
import { SkincareStickyCta } from '../../components/skincare/SkincareStickyCta';

export const LaunchPersonalCarePage: React.FC = () => {
  const [isWizardOpen, setIsWizardOpen] = useState<boolean>(false);
  const [wizardPrefill, setWizardPrefill] = useState<SkincareWizardPrefill>({});

  const handleOpenWizard = useCallback((prefillData?: SkincareWizardPrefill) => {
    setWizardPrefill(prefillData || {});
    setIsWizardOpen(true);
  }, []);

  const handleCloseWizard = useCallback(() => {
    setIsWizardOpen(false);
  }, []);

  const handleScrollToCategories = useCallback(() => {
    const elem = document.getElementById('skincare-categories');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="relative bg-white text-[#111111] selection:bg-black selection:text-white font-sans overflow-x-hidden min-h-screen">
      <Helmet>
        <title>Launch Your Skincare Brand in India | Banega Brand</title>
        <meta
          name="description"
          content="From active serum development and texture formulation to airless packaging, manufacturing, branding and launch — build your skincare brand with one launch partner in 45–90 days."
        />
        <meta
          name="keywords"
          content="launch skincare brand, skincare contract manufacturing india, private label serum, vitamin c serum manufacturer, sunscreen spf 50 formulation, ceramide moisturizer lab, private label skincare india"
        />
        <link rel="canonical" href="https://banegabrand.com/industry/skincare" />

        {/* OpenGraph */}
        <meta property="og:title" content="Your Skincare Idea. Your Formula. Your Brand. | Banega Brand" />
        <meta
          property="og:description"
          content="From product development and formulation to packaging, manufacturing, branding and launch — build your skincare brand with one launch partner."
        />
        <meta property="og:url" content="https://banegabrand.com/industry/skincare" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://banegabrand.com/assets/Banner%204.png" />

        {/* Structured Data / Schema.org for SEO & AEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': 'https://banegabrand.com/industry/skincare#service',
                'name': 'Clinical Skincare & Derma Brand Launch Services',
                'provider': {
                  '@type': 'Organization',
                  'name': 'Banega Brand',
                  'url': 'https://banegabrand.com',
                  'logo': 'https://banegabrand.com/assets/banega_logo_official.png',
                },
                'serviceType': 'Turnkey Clinical Skincare Formulation, Airless Packaging & GMP Manufacturing',
                'areaServed': ['India', 'United States', 'Europe', 'Middle East'],
                'description':
                  'End-to-end active serum formulation, stabilized Vitamin C & Niacinamide, airless dispensers, in-vivo SPF testing, dermatological patch testing, and marketplace onboarding in 45–90 days.',
              },
              {
                '@type': 'BreadcrumbList',
                'itemListElement': [
                  {
                    '@type': 'ListItem',
                    'position': 1,
                    'name': 'Home',
                    'item': 'https://banegabrand.com',
                  },
                  {
                    '@type': 'ListItem',
                    'position': 2,
                    'name': 'Industries',
                    'item': 'https://banegabrand.com/services',
                  },
                  {
                    '@type': 'ListItem',
                    'position': 3,
                    'name': 'Clinical Skincare & Derma',
                    'item': 'https://banegabrand.com/industry/skincare',
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                'mainEntity': [
                  {
                    '@type': 'Question',
                    'name': 'Can I launch a clinical skincare brand in India starting with just an idea?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Yes. More than 70% of skincare founders begin with just a problem statement (e.g. gentle Niacinamide serum for sensitive barrier repair). We engineer active formulas, source airless vacuum bottles, conduct dermatological patch testing, and manage GMP manufacturing from scratch.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'What is the minimum order quantity (MOQ) for custom skincare manufacturing with Banega Brand?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'We offer low starting pilot batch MOQs beginning at 250 to 500 units per SKU for market validation launches, scaling up to 5,000+ units for commercial volume runs.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'How does Banega Brand verify formulation stability and active efficacy?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'All skincare formulas undergo 90-day accelerated stability testing (45°C/75% RH), freeze-thaw challenge assays, microbial PET testing, and independent dermatological safety patch tests with verified Certificate of Analysis (COA).',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'Who owns the custom skincare formula IP and rights?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'You retain 100% intellectual property ownership of your formulation, batch recipes, component toolings, and branding design assets under a binding IP assignment agreement.',
                    },
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Global Navigation */}
      <Navbar />

      <main className="w-full">
        {/* 01 — HERO */}
        <SkincareHero
          onOpenWizard={(opts) => handleOpenWizard(opts)}
          onScrollToExplore={handleScrollToCategories}
        />

        {/* 02 — WHAT DO YOU WANT TO LAUNCH? */}
        <SkincareProductCategoriesSection
          onSelectCategory={(catName) => handleOpenWizard({ productType: catName })}
        />

        {/* 03 — MANUFACTURING */}
        <SkincareManufacturingSection
          onTalkSpecialist={() => handleOpenWizard({ scope: 'Product Only' })}
        />

        {/* 04 — FAQ */}
        <SkincareFaqSection />
      </main>

      {/* Global Footer */}
      <FigmaFooter />

      {/* Interactive Guided Launch Modal */}
      <SkincareLaunchWizardModal
        isOpen={isWizardOpen}
        onClose={handleCloseWizard}
        prefill={wizardPrefill}
      />

      {/* Persistent Bottom Conversion CTA Bar */}
      <SkincareStickyCta onOpenWizard={() => handleOpenWizard()} />
    </div>
  );
};

export default LaunchPersonalCarePage;
