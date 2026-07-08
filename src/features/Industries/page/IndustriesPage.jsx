import React, { useEffect } from "react";
import { IndustriesHero } from "../components/IndustriesHero/IndustriesHero";
import { PlaybookLocator } from "../components/PlaybookLocator/PlaybookLocator";
import { DeepDives } from "../components/DeepDives/DeepDives";
import { MarketCoverage } from "../components/MarketCoverage/MarketCoverage";
import { AdvantageSection } from "../components/AdvantageSection/AdvantageSection";
import { IndustriesCta } from "../components/IndustriesCta/IndustriesCta";

export const IndustriesPage = () => {
  useEffect(() => {
    document.title = "Industry Solutions | Flowbee.io";
  }, []);

  return (
    <div className="w-full bg-white text-[#111] selection:bg-[#25D366]/20 overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <IndustriesHero />

      {/* 2. PLAYBOOK LOCATOR (VERTICAL SELECTOR) */}
      <PlaybookLocator />

      {/* 3. DEEP DIVES SECTION */}
      <DeepDives />

      {/* 4. MARKET COVERAGE BENTO GRID */}
      <MarketCoverage />

      {/* 5. ADVANTAGES SECTION */}
      <AdvantageSection />

      {/* 6. CTA SECTION */}
      <IndustriesCta />

      {/* Style for custom scrollbar inside the dropdown */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f9fafb;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d1d5db;
        }
      `,
        }}
      />
    </div>
  );
};
