import React from 'react';
import {
  LegalPageLayout,
  LegalIntro,
  LegalSection,
  LegalParagraph,
  LegalList,
  LegalContact,
} from '../components/LegalPageLayout';

export const PrivacyPolicyPage = () => (
  <LegalPageLayout badge="Legal" title="Privacy Policy">
    <LegalIntro>
      Banega Brand Marketing Co. (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
      respects your privacy and is committed to protecting your personal information.
    </LegalIntro>

    <LegalSection title="Information We Collect" first>
      <LegalParagraph>We may collect:</LegalParagraph>
      <LegalList
        items={[
          'Your name, email address, phone number, and business information.',
          'Billing and payment information.',
          'Website usage and analytics data.',
          'Information you provide through forms, emails, or other communications.',
        ]}
      />
    </LegalSection>

    <LegalSection title="How We Use Information">
      <LegalParagraph>We use personal information to:</LegalParagraph>
      <LegalList
        items={[
          'Provide marketing, branding, website development, and consulting services.',
          'Process payments and invoices.',
          'Communicate with clients and prospective clients.',
          'Improve our website and services.',
          'Comply with legal obligations.',
        ]}
      />
    </LegalSection>

    <LegalSection title="Legal Bases for Processing Personal Information">
      <LegalParagraph>
        Where required by law, we process personal information based on one or more of the
        following legal grounds:
      </LegalParagraph>
      <LegalList
        items={[
          <>
            <strong className="text-[#111111]">Consent:</strong> When you voluntarily provide
            information, subscribe to marketing communications, or otherwise agree to specific
            processing activities. If consent is the basis for processing, you may withdraw it at
            any time.
          </>,
          <>
            <strong className="text-[#111111]">Contractual Necessity:</strong> When processing is
            needed to enter into, perform, or manage a contract with you, including providing
            services, communicating about projects, and processing payments.
          </>,
          <>
            <strong className="text-[#111111]">Legal Obligation:</strong> When processing is
            necessary to comply with applicable laws, regulations, court orders, tax requirements,
            accounting obligations, or other legal duties.
          </>,
          <>
            <strong className="text-[#111111]">Legitimate Interests:</strong> When processing is
            necessary to operate, secure, improve, or promote our business and services, provided
            those interests do not outweigh your rights and freedoms.
          </>,
        ]}
      />
      <LegalParagraph>Examples include:</LegalParagraph>
      <LegalList
        items={[
          'Providing marketing, branding, website development, and consulting services: Contractual necessity and, where applicable, legitimate interests.',
          'Processing payments and invoices: Contractual necessity and legal obligation.',
          'Communicating with clients and prospective clients: Contractual necessity, consent, or legitimate interests, depending on the communication.',
          'Improving our website and services through analytics and usage data: Legitimate interests and, where required by law, consent.',
          'Sending marketing or promotional communications: Consent where required by law, or legitimate interests where permitted.',
          'Complying with legal obligations: Legal obligation.',
        ]}
      />
    </LegalSection>

    <LegalSection title="User Rights">
      <LegalParagraph>
        Subject to applicable law, you may have the following rights regarding your personal
        information:
      </LegalParagraph>
      <LegalList
        items={[
          <>
            <strong className="text-[#111111]">Access:</strong> Request access to the personal
            information we hold about you.
          </>,
          <>
            <strong className="text-[#111111]">Correction:</strong> Request that inaccurate or
            incomplete information be corrected or updated.
          </>,
          <>
            <strong className="text-[#111111]">Deletion:</strong> Request deletion of your personal
            information, subject to legal, contractual, or regulatory requirements.
          </>,
          <>
            <strong className="text-[#111111]">Data Copy:</strong> Request a copy of the personal
            information you provided to us in a commonly used format, where applicable.
          </>,
          <>
            <strong className="text-[#111111]">Marketing Opt-Out:</strong> Stop receiving marketing
            communications at any time by using the unsubscribe link in our emails or contacting us
            directly.
          </>,
        ]}
      />
      <LegalParagraph>
        To exercise these rights, contact us using the information in the Contact section below. We
        may need to verify your identity before processing certain requests and will respond as
        required by applicable law.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Data Security">
      <LegalParagraph>
        We use reasonable administrative, technical, and organizational safeguards to protect
        personal information from unauthorized access, disclosure, or misuse.
      </LegalParagraph>
      <LegalParagraph>
        If we become aware of a data breach or security incident involving personal information
        that is reasonably likely to result in unauthorized access, disclosure, loss, alteration,
        theft, or misuse, we will investigate and take appropriate corrective action. When required
        by law, we will notify affected individuals and relevant regulatory authorities without
        undue delay and within any legally required timeframes. Examples of incidents that may
        require notification include unauthorized access to personal information, data theft,
        ransomware attacks, accidental disclosure of sensitive information, or other security
        events that materially affect the confidentiality, integrity, or availability of personal
        information.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Third-Party Services">
      <LegalParagraph>
        We may use trusted third-party service providers, including payment processors, analytics
        tools, CRM systems, advertising platforms, and cloud hosting providers.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Cookies">
      <LegalParagraph>
        Our website uses cookies and similar technologies to enhance functionality, improve user
        experience, analyze website traffic, and support marketing activities. Where required by
        applicable law, we will display a cookie consent notice when you visit our website,
        allowing you to accept, reject, or customize certain categories of cookies before they are
        placed on your device.
      </LegalParagraph>
      <LegalParagraph>We may use the following categories of cookies:</LegalParagraph>
      <LegalList
        items={[
          <>
            <strong className="text-[#111111]">Essential Cookies:</strong> Necessary for the
            operation, security, and core functionality of the website. These cookies cannot
            generally be disabled because they are required for the website to function properly.
          </>,
          <>
            <strong className="text-[#111111]">Analytics Cookies:</strong> Help us understand how
            visitors interact with our website by collecting information about usage, performance,
            and traffic patterns. These cookies help us improve our website and services.
          </>,
          <>
            <strong className="text-[#111111]">Marketing Cookies:</strong> Used to deliver relevant
            advertising, measure campaign effectiveness, and track interactions with marketing
            content across websites and platforms.
          </>,
        ]}
      />
      <LegalParagraph>
        You can manage your cookie preferences through our cookie consent banner or preference
        center, where available. Most web browsers also allow you to control, block, or delete
        cookies through browser settings. If you choose to disable certain cookies, some features
        or functionality of the website may not operate as intended. You may also opt out of
        certain analytics and advertising technologies through applicable industry opt-out tools or
        provider-specific settings.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Disclosure of Information">
      <LegalParagraph>
        We do not sell personal information. We may share information when required by law or with
        authorized service providers that help support our operations.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Data Retention">
      <LegalParagraph>
        We keep personal information only as long as necessary to meet business, legal,
        accounting, or regulatory requirements.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="Contact">
      <LegalParagraph>For privacy-related questions or concerns, contact:</LegalParagraph>
      <LegalContact email="help@banegabrand.com" />
      <LegalParagraph>
        By using our website, you consent to this Privacy Policy.
      </LegalParagraph>
    </LegalSection>
  </LegalPageLayout>
);
