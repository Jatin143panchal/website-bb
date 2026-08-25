import React from 'react';
import {
  LegalPageLayout,
  LegalSection,
  LegalSubSection,
  LegalParagraph,
  LegalList,
  LegalContact,
} from '../components/LegalPageLayout';

export const TermsConditionsPage = () => (
  <LegalPageLayout badge="Legal" title="Terms & Conditions">
    <LegalSection title="Acceptance of Terms" first>
      <LegalParagraph>
        By accessing, browsing, or using this website or any Services provided by Banega Brand
        Marketing Co., the User acknowledges that they have read, understood, and agree to be bound
        by these Terms & Conditions, including any amendments, modifications, or future updates
        that may be published from time to time. Continued access to or use of the website or
        Services after any such updates constitutes acceptance of the revised Terms & Conditions.
        If the User does not agree to these Terms & Conditions, the User must immediately
        discontinue use of the website and Services.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="1. Introduction">
      <LegalParagraph>
        These Terms & Conditions govern your access to and use of the website and Services provided
        by Banega Brand Marketing Co. By using the website or Services, you agree to comply with
        these Terms & Conditions and all applicable laws and regulations.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="2. Definitions">
      <LegalParagraph>For the purposes of these Terms & Conditions:</LegalParagraph>
      <LegalList
        items={[
          <>
            <strong className="text-[#111111]">&ldquo;Company&rdquo;</strong> means Banega Brand
            Marketing Co.
          </>,
          <>
            <strong className="text-[#111111]">&ldquo;Services&rdquo;</strong> means the branding,
            digital marketing, website development, social media management, consulting, lead
            generation, and related services provided by the Company.
          </>,
          <>
            <strong className="text-[#111111]">&ldquo;User&rdquo;</strong> means any individual or
            legal entity that accesses or uses the website or Services.
          </>,
        ]}
      />
    </LegalSection>

    <LegalSection title="3. Services">
      <LegalParagraph>
        The Company provides the Services described herein and reserves the right to modify,
        update, suspend, restrict, or discontinue any aspect of such Services at its sole
        discretion and without liability, subject to applicable law.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="4. Privacy, Cookies, and User Data">
      <LegalParagraph>
        The Company may collect, process, store, and use certain personal information and usage
        data in connection with the operation of the website and provision of Services. Such data
        handling practices are governed by the Company&apos;s Privacy Policy, which is incorporated
        into these Terms & Conditions by reference.
      </LegalParagraph>
      <LegalParagraph>
        The website may use cookies, analytics tools, and similar technologies to enhance
        functionality, improve user experience, analyze website performance, and support marketing
        activities. By using the website, the User acknowledges and agrees to the use of cookies
        and related technologies in accordance with the Company&apos;s Privacy Policy and Cookie
        Policy, where applicable.
      </LegalParagraph>
      <LegalParagraph>
        Users are responsible for ensuring that any information they provide is accurate and up to
        date. The Company will handle personal data in accordance with applicable data protection
        and privacy laws.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="5. Payment Terms, Billing, Pricing, and Refunds">
      <LegalParagraph>
        Certain Services offered by the Company may be provided on a paid basis pursuant to a
        separate proposal, quotation, service agreement, subscription plan, or invoice. Pricing for
        paid Services will be communicated to the User before engagement and may vary depending on
        the scope, duration, complexity, and requirements of the Services.
      </LegalParagraph>

      <LegalSubSection title="5.1 Payment and Billing">
        <LegalList
          items={[
            'Payment for paid Services shall be due in accordance with the terms specified in the applicable invoice, proposal, or agreement.',
            'The Company may require advance payments, deposits, milestone payments, recurring subscription fees, or full payment before commencement of Services.',
            'For recurring or subscription-based Services, billing cycles may be monthly, quarterly, annually, or as otherwise agreed in writing between the parties.',
            'All fees are stated in the applicable currency and are exclusive of applicable taxes unless expressly stated otherwise. The User is responsible for any applicable taxes, duties, or governmental charges.',
            'The Company reserves the right to revise pricing for future Services or renewal periods upon reasonable notice where applicable.',
          ]}
        />
      </LegalSubSection>

      <LegalSubSection title="5.2 Refunds and Cancellations">
        <LegalParagraph>
          Unless otherwise expressly agreed in writing, payments made for Services are
          non-refundable. If a User wishes to cancel a Service, the User must provide written
          notice to the Company. Cancellation will not entitle the User to a refund for Services
          already rendered, completed work, incurred costs, or billing periods that have commenced.
          Any refund, credit, or cancellation accommodation shall be granted solely at the
          Company&apos;s discretion or as required by applicable law.
        </LegalParagraph>
        <LegalParagraph>
          If any Services are offered free of charge, the Company reserves the right to modify,
          limit, suspend, or discontinue such Services at any time without liability.
        </LegalParagraph>
      </LegalSubSection>
    </LegalSection>

    <LegalSection title="6. Intellectual Property">
      <LegalParagraph>
        All content, designs, logos, graphics, text, materials, and other intellectual property
        displayed on this website are owned by or licensed to the Company and are protected by
        applicable intellectual property laws. Such content may not be copied, reproduced,
        modified, distributed, transmitted, or otherwise used without the Company&apos;s prior
        written consent.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="7. User Obligations">
      <LegalParagraph>The User agrees that it shall not:</LegalParagraph>
      <LegalList
        items={[
          'Use the website for any unlawful or unauthorized purpose.',
          'Attempt to gain unauthorized access to any systems, networks, data, or user information.',
          'Upload, transmit, or distribute any malicious, harmful, or disruptive content.',
          'Infringe upon any intellectual property or proprietary rights of the Company or any third party.',
          'Interfere with the security, integrity, or operation of the website or Services.',
        ]}
      />
    </LegalSection>

    <LegalSection title="8. Indemnification">
      <LegalParagraph>
        The User agrees to indemnify, defend, and hold harmless the Company, its affiliates,
        officers, directors, employees, agents, licensors, and service providers from and against
        any and all claims, demands, actions, damages, losses, liabilities, costs, and expenses,
        including reasonable attorneys&apos; fees and legal costs, arising out of or related to the
        User&apos;s misuse of the website or Services, violation of these Terms & Conditions,
        infringement of any rights of a third party, violation of any applicable law or regulation,
        or improper handling of data obtained through the website or Services.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="9. Limitation of Liability">
      <LegalParagraph>
        To the fullest extent permitted by applicable law, the website and Services are provided
        on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis, without warranties of any
        kind, whether express, implied, statutory, or otherwise, including any implied warranties
        of merchantability, fitness for a particular purpose, title, or non-infringement. To the
        fullest extent permitted by applicable law, the Company disclaims all such warranties.
      </LegalParagraph>
      <LegalParagraph>
        To the fullest extent permitted by applicable law, the Company shall not be liable for any
        indirect, incidental, special, consequential, exemplary, or punitive damages arising out
        of or relating to the User&apos;s access to, use of, or inability to use the website or
        Services.
      </LegalParagraph>
      <LegalParagraph>
        To the fullest extent permitted by applicable law, the Company&apos;s total aggregate
        liability arising out of or relating to the website, the Services, or these Terms &
        Conditions, whether in contract, tort (including negligence), strict liability, statute, or
        otherwise, shall not exceed the total fees actually paid by the User to the Company for the
        applicable Services during the twelve (12) months immediately preceding the event giving
        rise to the claim. This limitation applies to all claims, causes of action, damages,
        losses, and liabilities combined and shall be the User&apos;s exclusive monetary remedy
        against the Company. If the User has not paid any fees to the Company during such twelve
        (12)-month period, the Company shall have no monetary liability to the User to the fullest
        extent permitted by applicable law.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="10. Service Availability">
      <LegalParagraph>
        The Company does not guarantee uninterrupted availability of the website or Services and
        reserves the right, at any time and without prior notice, to modify, suspend, restrict, or
        discontinue any part of the website or Services.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="11. External Links">
      <LegalParagraph>
        This website may contain links to third-party websites for convenience or informational
        purposes. The Company does not control and is not responsible for the content, privacy
        practices, cookie policies, data handling procedures, or availability of any third-party
        websites and disclaims any liability arising from their use.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="12. Governing Law">
      <LegalParagraph>
        These Terms & Conditions shall be governed by and construed in accordance with the laws of
        India, without regard to any conflict of law principles.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="13. Dispute Resolution">
      <LegalParagraph>
        The parties agree to attempt to resolve any dispute, claim, or controversy arising out of
        or relating to these Terms & Conditions, the website, or the Services through the following
        process before commencing court proceedings:
      </LegalParagraph>

      <LegalSubSection title="13.1 Good-Faith Negotiation">
        <LegalParagraph>
          A party seeking to raise a dispute shall provide written notice to the other party
          describing the nature of the dispute and the relief sought. Within fifteen (15) days of
          receipt of such notice, the parties shall engage in good-faith negotiations and use
          reasonable efforts to resolve the dispute amicably. The negotiation period shall continue
          for up to thirty (30) days from the date the notice is received unless the parties agree
          in writing to extend the period.
        </LegalParagraph>
      </LegalSubSection>

      <LegalSubSection title="13.2 Mediation">
        <LegalParagraph>
          If the dispute is not resolved through negotiation within the applicable period, either
          party may submit the dispute to mediation by providing written notice to the other party.
          The mediation shall commence within thirty (30) days of such notice, unless otherwise
          agreed by the parties. The mediator shall be mutually selected by the parties, and the
          mediation shall be conducted in accordance with mutually agreed mediation procedures or,
          failing agreement, generally accepted mediation practices in India. The parties shall
          share mediation costs equally unless otherwise agreed.
        </LegalParagraph>
      </LegalSubSection>

      <LegalSubSection title="13.3 Arbitration">
        <LegalParagraph>
          If the dispute is not resolved through mediation within forty-five (45) days after the
          appointment of the mediator, or if mediation is declined by either party, the dispute
          shall be finally resolved by binding arbitration. The arbitration shall be conducted in
          Noida, Uttar Pradesh, in accordance with the Arbitration and Conciliation Act, 1996, as
          amended from time to time. The arbitration shall be conducted by a sole arbitrator
          mutually appointed by the parties, or, failing agreement, appointed in accordance with
          applicable law. The proceedings shall be conducted in English, and the arbitral award
          shall be final and binding on the parties.
        </LegalParagraph>
      </LegalSubSection>

      <LegalSubSection title="13.4 Court Proceedings">
        <LegalParagraph>
          No party shall commence court proceedings relating to a dispute covered by this Section
          until it has first complied with the negotiation and mediation or arbitration procedures
          described above, except where a party seeks urgent interim, injunctive, or equitable
          relief from a court of competent jurisdiction to protect its rights pending completion
          of the dispute resolution process.
        </LegalParagraph>
      </LegalSubSection>
    </LegalSection>

    <LegalSection title="14. Jurisdiction">
      <LegalParagraph>
        Subject to the dispute resolution procedures set forth above, any court proceedings
        permitted under these Terms & Conditions shall be subject to the exclusive jurisdiction of
        the competent courts located in Noida, Uttar Pradesh.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="15. Force Majeure">
      <LegalParagraph>
        The Company shall not be liable for any delay, interruption, failure, or inability to
        perform any obligation under these Terms & Conditions or in connection with the website or
        Services where such delay or failure results from events beyond the Company&apos;s
        reasonable control, including but not limited to natural disasters, floods, earthquakes,
        fires, storms, acts of God, government actions, laws or regulations, war, terrorism, civil
        unrest, internet or telecommunications outages, cyberattacks, pandemics, epidemics, public
        health emergencies, labor disputes, strikes, lockouts, shortages of materials, utility
        failures, or failures of third-party service providers.
      </LegalParagraph>
      <LegalParagraph>
        During the occurrence of any such force majeure event, the affected obligations of the
        Company shall be suspended for the duration of the event and for a reasonable period
        thereafter required to resume performance. The Company shall use commercially reasonable
        efforts to mitigate the effects of the force majeure event and resume performance as soon
        as practicable. If a force majeure event continues for an extended period and materially
        affects the provision of Services, the Company reserves the right to modify, suspend, or
        terminate affected Services without liability, subject to applicable law and any separate
        written agreement between the parties.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="16. Severability">
      <LegalParagraph>
        If any provision of these Terms & Conditions is determined by a court or other competent
        authority to be invalid, illegal, or unenforceable, such provision shall be deemed modified
        to the minimum extent necessary to make it valid and enforceable while preserving its
        intent to the greatest extent permitted by law. If such modification is not possible, the
        provision shall be deemed severed from these Terms & Conditions. In either case, the
        remaining provisions of these Terms & Conditions shall remain in full force and effect and
        shall not be affected by the invalidity or unenforceability of any provision.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="17. Contact Information">
      <LegalParagraph>
        For any questions regarding these Terms & Conditions, privacy practices, cookies, or data
        handling matters, please contact:
      </LegalParagraph>
      <LegalContact email="help@banegabrand.com" phone="8796755169" />
    </LegalSection>
  </LegalPageLayout>
);
