import React, { useState } from "react";
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

// Detect region synchronously so there's no flash on first render
const getInitialState = () => {
  const userLocale = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const detectedCurrency = detectUserRegion(userLocale, regions);
  // INR users start on Quarterly; all others start on Monthly
  const defaultCycle = detectedCurrency.code === "INR" ? "quarterly" : "monthly";
  return { currency: detectedCurrency, billingCycle: defaultCycle };
};

export const PricingPage = () => {
  const initial = getInitialState();
  const [billingCycle, setBillingCycle] = useState(initial.billingCycle);
  const [currency, setCurrency] = useState(initial.currency);

  return (
    <div className="w-full bg-white text-[#111] selection:bg-[#25D366]/20 overflow-x-hidden">
      <UrgencyBanner />
      <PricingHeader
        billingCycle={billingCycle}
        setBillingCycle={setBillingCycle}
        currency={currency}
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
