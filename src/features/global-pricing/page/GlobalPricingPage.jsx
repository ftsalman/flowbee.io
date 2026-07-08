import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Components
import { UrgencyBanner } from '../components/UrgencyBanner';
import { PricingHeader } from '../components/PricingHeader';
import { PricingCards } from '../components/PricingCards';
import { FeatureMatrix } from '../components/FeatureMatrix';
import { MetaCharges } from '../components/MetaCharges';
import { FinalCTA } from '../components/FinalCTA';

// Data
import { structuredData } from '../constants/pricingData';

export const GlobalPricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedRegion, setSelectedRegion] = useState({ code: 'USD', symbol: '$', label: 'Global (USD)' });

  return (
    <HelmetProvider>
      <main className="w-full bg-white text-[#111] selection:bg-[#25D366]/20 overflow-x-hidden font-sans">
        
        <Helmet>
          <title>Global Pricing & Plans | Flowbee.io</title>
          <meta name="description" content="View Flowbee.io WhatsApp Automation pricing for all regions worldwide. Compare our Starter, Growth, and Pro plans in USD, INR, and AED." />
          <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </Helmet>

        <UrgencyBanner />

        <PricingHeader 
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          billingCycle={billingCycle}
          setBillingCycle={setBillingCycle}
        />

        <PricingCards 
          selectedRegion={selectedRegion}
          billingCycle={billingCycle}
        />

        <FeatureMatrix />
        <MetaCharges />
        <FinalCTA />

      </main>
    </HelmetProvider>
  );
};
