import React from "react";
import { FeaturesHero } from "../components/FeaturesHero/FeaturesHero";
import { NativeEcosystem } from "../components/NativeEcosystem/NativeEcosystem";
import { HyperScaleBroadcast } from "../components/HyperScaleBroadcast/HyperScaleBroadcast";
import { AutonomousReplies } from "../components/AutonomousReplies/AutonomousReplies";
import { MobileCatalog } from "../components/MobileCatalog/MobileCatalog";
import { SharedTeamInbox } from "../components/SharedTeamInbox/SharedTeamInbox";
import { DeepUtility } from "../components/DeepUtility/DeepUtility";
import { FeaturesCta } from "../components/FeaturesCta/FeaturesCta";

export const FeaturesPage = () => {
  return (
    <div className="w-full bg-white text-[#111] selection:bg-[#25D366]/20 overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <FeaturesHero />

      {/* 2. INTEGRATION HUB (WITH LOGOS) */}
      <NativeEcosystem />

      {/* 3. HYPER-SCALE BROADCASTING */}
      <HyperScaleBroadcast />

      {/* 4. AUTONOMOUS REPLIES */}
      <AutonomousReplies />

      {/* 5. MOBILE CATALOG SITE */}
      <MobileCatalog />

      {/* 6. SHARED TEAM INBOX */}
      <SharedTeamInbox />

      {/* 7. DEEP UTILITY BENTO */}
      <DeepUtility />

      {/* 8. FINAL CTA */}
      <FeaturesCta />
    </div>
  );
};
