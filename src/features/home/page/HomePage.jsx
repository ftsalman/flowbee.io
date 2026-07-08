import { useState } from "react";
import { Hero } from "../components/Hero/Hero";
import { ClientMarquee } from "../components/ClientMarquee/ClientMarquee";
import { UnifiedHub } from "../components/UnifiedHub/UnifiedHub";
import { Integrations } from "../components/Integrations/Integrations";
import { AdsSection, BroadcastSection } from "../components/AdsBroadcast/AdsBroadcast";
import { AiBotSection } from "../components/AiBot/AiBot";
import { RoadmapSection, BentoSection, IndustriesSection } from "../components/Sections/Sections";
import { VideoModal, VideoPreview, CtaSection } from "../components/Cta/Cta";

export const HomePage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="w-full bg-white text-[#111] selection:bg-[#25D366]/20 overflow-x-hidden ">
      {/* 1. VIDEO MODAL */}
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />

      {/* 2. HERO */}
      <Hero onVideoOpen={() => setIsVideoOpen(true)} />

      {/* 3. CLIENT LOGOS MARQUEE */}
      <ClientMarquee />

      {/* 4. UNIFIED WHATSAPP HUB */}
      <UnifiedHub />

      {/* 5. INTEGRATIONS */}
      <Integrations />

      {/* 6. ADS SECTION */}
      <AdsSection />

      {/* 7. BROADCAST SECTION */}
      <BroadcastSection />

      {/* 8. AI BOT SECTION */}
      <AiBotSection />

      {/* 9. ROADMAP */}
      <RoadmapSection />

      {/* 10. VIDEO PREVIEW */}
      <VideoPreview onOpen={() => setIsVideoOpen(true)} />

      {/* 11. BENTO FEATURES */}
      <BentoSection />

      {/* 12. INDUSTRIES */}
      <IndustriesSection />

      {/* 13. FINAL CTA */}
      <CtaSection />
    </div>
  );
};
