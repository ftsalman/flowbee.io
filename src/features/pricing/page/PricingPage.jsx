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
  const [billingCycle, setBillingCycle] = useState("quarterly");
  const [currency, setCurrency] = useState(regions[0]);

  useEffect(() => {
    const userLocale = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const detectedCurrency = detectUserRegion(userLocale, regions);
    setCurrency(detectedCurrency);
    if (detectedCurrency.code !== "INR" && billingCycle === "halfYearly") {
      setBillingCycle("quarterly");
    } else if (detectedCurrency.code === "INR" && billingCycle === "monthly") {
      setBillingCycle("quarterly");
    }
  }, []);

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
