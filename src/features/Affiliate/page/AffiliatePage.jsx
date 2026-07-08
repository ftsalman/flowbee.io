import React, { useEffect } from "react";
import {
  AffiliateHero,
  AffiliateOpportunity,
  CommissionTiersSection,
  TargetAudienceSection,
  AffiliateCtaSection,
} from "../components";

export const AffiliatePage = () => {
  // SEO & Title Logic
  useEffect(() => {
    document.title = "Affiliate Program | Partner with Flowbee.io";
  }, []);

  return (
    <div className="w-full bg-white text-[#111] selection:bg-[#25D366]/20 pt-16 lg:pt-5 overflow-x-hidden">
      <AffiliateHero />
      <AffiliateOpportunity />
      <CommissionTiersSection />
      <TargetAudienceSection />
      <AffiliateCtaSection />
    </div>
  );
};
