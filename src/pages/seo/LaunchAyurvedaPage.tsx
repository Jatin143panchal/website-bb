import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../../components/Navbar';
import { FigmaFooter } from '../../components/FigmaFooter';

// Dedicated Ayurveda & Botanicals Components
import { AyurvedaHero } from '../../components/ayurveda/AyurvedaHero';
import { AyurvedaCategoriesSection } from '../../components/ayurveda/AyurvedaCategoriesSection';
import { AyurvedaProcessSection } from '../../components/ayurveda/AyurvedaProcessSection';
import { AyurvedaIngredientStorySection } from '../../components/ayurveda/AyurvedaIngredientStorySection';
import { AyurvedaTraditionModernSection } from '../../components/ayurveda/AyurvedaTraditionModernSection';
import { AyurvedaPackagingSection } from '../../components/ayurveda/AyurvedaPackagingSection';
import { AyurvedaBrandingSection } from '../../components/ayurveda/AyurvedaBrandingSection';
import { AyurvedaManufacturingSection } from '../../components/ayurveda/AyurvedaManufacturingSection';
import { AyurvedaFaqSection } from '../../components/ayurveda/AyurvedaFaqSection';

// Interactive Guided Launch Modal & Sticky CTA
import { AyurvedaLaunchWizardModal, AyurvedaWizardPrefill } from '../../components/ayurveda/AyurvedaLaunchWizardModal';
import { AyurvedaStickyCta } from '../../components/ayurveda/AyurvedaStickyCta';

export const LaunchAyurvedaPage: React.FC = () => {
  const [isWizardOpen, setIsWizardOpen] = useState<boolean>(false);
  const [wizardPrefill, setWizardPrefill] = useState<AyurvedaWizardPrefill>({});

  const handleOpenWizard = useCallback((prefillData?: AyurvedaWizardPrefill) => {
    setWizardPrefill(prefillData || {});
    setIsWizardOpen(true);
  }, []);

  const handleCloseWizard = useCallback(() => {
    setIsWizardOpen(false);
  }, []);

  const handleScrollToCategories = useCallback(() => {
    const elem = document.getElementById('ayurveda-categories');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="relative bg-white text-[#111111] selection:bg-black selection:text-white font-sans overflow-x-hidden min-h-screen">
      <Helmet>
        <title>Launch Your Ayurvedic & Botanical Brand in India | Banega Brand</title>
        <meta
          name="description"
          content="Turn your Ayurvedic, herbal and botanical product ideas into market-ready brands. Turnkey formulation, amber glass packaging, AYUSH certified manufacturing, and marketplace launch in 45–90 days."
        />
        <meta
          name="keywords"
          content="launch ayurveda brand, ayurvedic manufacturing india, herbal skincare formulation, kumkumadi oil private label, ayush certified contract manufacturer, botanical cosmetic brand incubator, private label ayurveda"
        />
        <link rel="canonical" href="https://banegabrand.com/industry/ayurveda" />

        {/* OpenGraph */}
        <meta property="og:title" content="Ancient Knowledge. Modern Brands. | Banega Brand Ayurveda" />
        <meta
          property="og:description"
          content="Turn Ayurvedic, herbal and botanical product ideas into beautifully designed, market-ready brands."
        />
        <meta property="og:url" content="https://banegabrand.com/industry/ayurveda" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://banegabrand.com/assets/Banner%203.png" />

        {/* Structured Data / Schema.org for SEO & AEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': 'https://banegabrand.com/industry/ayurveda#service',
                'name': 'Ayurveda & Botanical Brand Launch Services',
                'provider': {
                  '@type': 'Organization',
                  'name': 'Banega Brand',
                  'url': 'https://banegabrand.com',
                  'logo': 'https://banegabrand.com/assets/banega_logo_official.png',
                },
                'serviceType': 'Turnkey Ayurvedic Formulation, Packaging & AYUSH Certified Manufacturing',
                'areaServed': ['India', 'United States', 'Europe', 'Middle East'],
                'description':
                  'End-to-end Vedic formulation, standardized herbal extraction, UV amber glass packaging, AYUSH GMP manufacturing, and marketplace onboarding in 45–90 days.',
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
                    'name': 'Ayurveda & Botanical Wellness',
                    'item': 'https://banegabrand.com/industry/ayurveda',
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                'mainEntity': [
                  {
                    '@type': 'Question',
                    'name': 'Can I launch an Ayurvedic product in India starting from just an idea?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Yes. Over 65% of founders who partner with Banega Brand start with just a concept or target concern (e.g. postpartum hair fall, brightening kumkumadi elixir). We handle active botanical sourcing, laboratory formulation, stability testing, custom bottle sourcing, and AYUSH licensing from scratch.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'How does Banega Brand ensure AYUSH and regulatory compliance?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'We formulate according to classical Sanskrit Ayurvedic texts or proprietary modern polyherbal benchmarks, managing state AYUSH licensing, heavy metal ICP-MS screening, and microbial clearance.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'Who owns the Ayurvedic formula and brand IP?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'You retain 100% of formulation IP and brand assets. Banega Brand signs an intellectual property assignment agreement delivering all batch master records, vendor source codes, and design assets upon launch.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'What is the turnaround time for an Ayurvedic product launch?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Turnkey incubation is typically 45 to 90 days from initial formulation brief to market-ready stock in your warehouse, including sampling, AYUSH approvals, and packaging manufacturing.',
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
        <AyurvedaHero
          onOpenWizard={(opts) => handleOpenWizard(opts)}
          onScrollToExplore={handleScrollToCategories}
        />

        {/* 02 — WHAT DO YOU WANT TO BUILD? (Product Categories) */}
        <AyurvedaCategoriesSection
          onSelectCategory={(categoryId, label) =>
            handleOpenWizard({ category: label })
          }
        />

        {/* 03 — FROM INGREDIENT TO PRODUCT (7-Step Process) */}
        <AyurvedaProcessSection
          onStartProduct={() => handleOpenWizard()}
        />

        {/* 04 — INGREDIENT & FORMULATION STORY */}
        <AyurvedaIngredientStorySection />

        {/* 05 — TRADITION × MODERN PRODUCT */}
        <AyurvedaTraditionModernSection />

        {/* 06 — PACKAGING */}
        <AyurvedaPackagingSection
          onDesignProduct={() => handleOpenWizard({ scope: 'Packaging' })}
        />

        {/* 07 — BRANDING & POSITIONING */}
        <AyurvedaBrandingSection
          onBuildBrand={() => handleOpenWizard({ scope: 'Brand' })}
        />

        {/* 08 — MANUFACTURING */}
        <AyurvedaManufacturingSection
          onTalkSpecialist={() => handleOpenWizard({ scope: 'Manufacturing' })}
        />

        {/* 09 — FAQ ACCORDION */}
        <AyurvedaFaqSection />
      </main>

      {/* Global Modern Footer */}
      <FigmaFooter />

      {/* Interactive Guided Launch Wizard Modal */}
      <AyurvedaLaunchWizardModal
        isOpen={isWizardOpen}
        onClose={handleCloseWizard}
        prefill={wizardPrefill}
      />

      {/* Persistent Bottom Conversion CTA Bar */}
      <AyurvedaStickyCta onOpenWizard={() => handleOpenWizard()} />
    </div>
  );
};

export default LaunchAyurvedaPage;
