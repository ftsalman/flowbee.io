import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Components
import { GuidelinesHeader } from '../components/GuidelinesHeader';
import { IntroductionSection } from '../components/IntroductionSection';
import { ConsentSection } from '../components/ConsentSection';
import { ServiceWindowSection } from '../components/ServiceWindowSection';
import { MessagingLimitsSection } from '../components/MessagingLimitsSection';
import { BillingSection } from '../components/BillingSection';
import { TemplateRulesSection } from '../components/TemplateRulesSection';
import { SpamRulesSection } from '../components/SpamRulesSection';
import { RapidRulesGrid } from '../components/RapidRulesGrid';
import { ChecklistSection } from '../components/ChecklistSection';
import { PolicyViolationsSection } from '../components/PolicyViolationsSection';
import { FlowbeeResponsibilities } from '../components/FlowbeeResponsibilities';
import { DeclarationSection } from '../components/DeclarationSection';
import { SummarySection } from '../components/SummarySection';
import { ExternalLinks } from '../components/ExternalLinks';

export const WhatsAppGuidelinesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <HelmetProvider>
      <div className="w-full bg-[#fafafa] text-[#111] pt-24 pb-20 selection:bg-[#25D366]/20 font-sans print:pt-0 print:bg-white print:text-black">
        <Helmet>
          <title>WhatsApp Business Usage & Meta Pricing Guidelines | Flowbee.io</title>
          <meta name="description" content="Official usage guidelines, account scaling limits, and conversation pricing models for the WhatsApp Business Platform via Flowbee.io." />
        </Helmet>

        <GuidelinesHeader onPrint={handlePrint} />

        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeUp}
            className="space-y-8 print:space-y-6"
          >
            <IntroductionSection />
            <ConsentSection />
            <ServiceWindowSection />
            <MessagingLimitsSection />
            <BillingSection />
            <TemplateRulesSection />
            <SpamRulesSection />
            <RapidRulesGrid />
            <ChecklistSection />
            <PolicyViolationsSection />
            <FlowbeeResponsibilities />
            <DeclarationSection />
            <SummarySection />
            <ExternalLinks />
          </motion.div>
        </div>
      </div>
    </HelmetProvider>
  );
};
