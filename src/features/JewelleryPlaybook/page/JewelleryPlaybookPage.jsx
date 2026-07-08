import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { HeroSection } from '../components/HeroSection';
import { OmnichannelMechanics } from '../components/OmnichannelMechanics';
import { SubfeatureGrid } from '../components/SubfeatureGrid';
import { FrictionBlocks } from '../components/FrictionBlocks';
import { ScenariosGrid } from '../components/ScenariosGrid';
import { FAQSection } from '../components/FAQSection';
import { DeploymentBlock } from '../components/DeploymentBlock';
import { PromoModal } from '../components/PromoModal';
import { structuredData } from '../constants/jewelleryData';

export const JewelleryPlaybookPage = () => {
  const [isPromoOpen, setIsPromoOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- TIMED TRIGGER (5 Seconds) ---
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPromoOpen(true);
    }, 20000); // 20 seconds
    return () => clearTimeout(timer);
  }, []);

  const handlePromoOpen = () => setIsPromoOpen(true);
  const handlePromoClose = () => setIsPromoOpen(false);

  return (
    <>
      <HelmetProvider>
        <main className="w-full bg-white text-gray-900 selection:bg-[#B8860B]/20 overflow-x-hidden font-sans">
          
          <Helmet>
            <title>Premium WhatsApp Automation for Jewellery Stores | Flowbee.io</title>
            <meta name="description" content="Deploy advanced WhatsApp automation, omnichannel CRM, and high-conversion broadcast architecture for your retail jewellery showroom with Flowbee.io." />
            <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
          </Helmet>

          <HeroSection onPromoOpen={handlePromoOpen} />
          <OmnichannelMechanics />
          <SubfeatureGrid />
          <FrictionBlocks />
          <ScenariosGrid />
          <FAQSection />
          <DeploymentBlock onPromoOpen={handlePromoOpen} />

          <PromoModal isOpen={isPromoOpen} onClose={handlePromoClose} />

        </main>
      </HelmetProvider>
    </>
  );
};
