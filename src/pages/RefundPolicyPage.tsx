import React from 'react';
import {
  LegalPageLayout,
  LegalIntro,
  LegalSection,
  LegalParagraph,
  LegalContact,
} from '../components/LegalPageLayout';

export const RefundPolicyPage = () => (
  <LegalPageLayout badge="Legal" title="Refund Policy">
    <LegalIntro>
      Banega Brand Marketing Co. invests substantial time, expertise, manpower, and other resources
      into each project. Accordingly, the following Refund Policy governs all payments made for the
      Company&apos;s services.
    </LegalIntro>

    <LegalSection title="1. General Policy" first>
      <LegalParagraph>
        Except as expressly stated herein, all payments made to Banega Brand Marketing Co. are
        non-refundable.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="2. Service-Based Projects">
      <LegalParagraph>
        Once work has commenced on any branding, website development, digital marketing,
        advertising, consulting, social media management, lead generation, or other customized
        service, no refund shall be provided for services performed, work completed, or resources
        allocated.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="3. Cancellation Prior to Commencement of Work">
      <LegalParagraph>
        If a cancellation request is submitted before any work has commenced, the Company may, at
        its sole discretion, approve a partial refund. Any such refund may be subject to deductions
        for administrative, processing, consultation, onboarding, and related charges incurred by
        the Company.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="4. Client Delays and Non-Cooperation">
      <LegalParagraph>
        No refund shall be issued where any project delay, suspension, or termination arises from
        the Client&apos;s failure to provide required content, approvals, access credentials,
        information, materials, or reasonable cooperation necessary for the performance of the
        services.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="5. Advertising Spend and Third-Party Costs">
      <LegalParagraph>
        All amounts paid toward advertising budgets, media purchases, third-party software
        subscriptions, domain registrations, hosting services, licensing fees, or charges payable
        to external vendors are strictly non-refundable.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="6. Exceptional Circumstances">
      <LegalParagraph>
        Any refund request submitted under exceptional circumstances shall be reviewed on a
        case-by-case basis. The Company reserves the sole right to determine whether a refund will
        be granted, and its decision shall be final and binding.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="7. Governing Law and Dispute Resolution">
      <LegalParagraph>
        This Refund Policy shall be governed by and construed in accordance with the laws of the
        jurisdiction in which Banega Brand Marketing Co. is legally established, without regard to
        its conflict of law principles.
      </LegalParagraph>
      <LegalParagraph>
        In the event of any dispute, claim, or controversy arising out of or relating to this
        Refund Policy, the parties shall first attempt to resolve the matter through good-faith
        negotiations. If the dispute cannot be resolved through negotiation within thirty (30)
        days, the dispute shall be submitted to binding arbitration administered by a mutually
        agreed arbitration provider in the applicable jurisdiction. The arbitration award shall be
        final and binding upon the parties and may be enforced in any court of competent
        jurisdiction.
      </LegalParagraph>
      <LegalParagraph>
        If arbitration is not permitted or enforceable under applicable law, the parties agree that
        the courts of competent jurisdiction located in the jurisdiction where Banega Brand
        Marketing Co. is legally established shall have exclusive jurisdiction over any such
        dispute.
      </LegalParagraph>
    </LegalSection>

    <LegalSection title="8. Contact Information">
      <LegalParagraph>For any questions or inquiries regarding refunds, please contact:</LegalParagraph>
      <LegalContact email="help@banegabrand.com" />
    </LegalSection>
  </LegalPageLayout>
);
