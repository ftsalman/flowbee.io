import React, { useEffect, useState } from "react";
import { regions } from "../constants/pricingData";
import { detectUserRegion } from "../utils/pricingUtils";
import {
  UrgencyBanner,
  PricingHeader,
  PricingCardsSection,
  FeatureMatrixSection,
  MetaChargesSection,
  PricingCtaSection,
} from "../components";

export const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [currency, setCurrency] = useState(regions[0]);

  useEffect(() => {
    const userLocale = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setCurrency(detectUserRegion(userLocale, regions));
  }, []);

  return (
    <div className="w-full bg-white text-[#111] selection:bg-[#25D366]/20 overflow-x-hidden">
      <UrgencyBanner />
      <PricingHeader
        billingCycle={billingCycle}
        setBillingCycle={setBillingCycle}
      />
      <PricingCardsSection
        billingCycle={billingCycle}
        currency={currency}
      />
      <FeatureMatrixSection />
      <MetaChargesSection />
      <PricingCtaSection />
    </div>
  );
};
