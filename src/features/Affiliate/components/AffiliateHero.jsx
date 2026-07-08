import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Button, Tag } from "../../../../lib/turtle-ui/components";
import { fadeUp } from "../utils/affiliateUtils";
import { WhatsAppBadge } from "./WhatsAppBadge";

export const AffiliateHero = () => {
  return (
    <section className="min-h-[70vh] lg:min-h-[90vh] flex items-center justify-center bg-[#fafafa] relative overflow-hidden px-6 py-20 lg:py-0">
      <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] lg:w-[60vw] lg:h-[60vw] bg-[#FFDD2D]/10 blur-[80px] lg:blur-[150px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] lg:w-[50vw] lg:h-[50vw] bg-[#25D366]/5 blur-[80px] lg:blur-[150px] rounded-full"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10 ">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <Tag
            variant="gray"
            className="inline-block py-2 px-4 lg:px-6 rounded-full bg-white border border-gray-100 shadow-xl text-[8px] lg:text-[10px] font-black tracking-[0.3em] lg:tracking-[0.4em] uppercase mb-8 lg:mb-10 text-gray-400 !w-auto !leading-normal !border-gray-100"
          >
            The Creator Economy Stack
          </Tag>
          <h1 className="text-3xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-6 lg:mb-10 leading-[1.1] lg:leading-[0.85] text-[#111]">
            Partner with <br className="hidden sm:block" /> <WhatsAppBadge />{" "}
            <br className="hidden sm:block" /> Mastery.
          </h1>
          <p className="text-base md:text-md lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 italic">
            "Turn your network into a recurring revenue engine. Earn up to
            40% monthly commissions for life."
          </p>
          <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row justify-center gap-4 lg:gap-6 px-4 mb-4">
            <Button
              onClick={() => {
                const el = document.getElementById("tiers");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="primary"
              size="lg"
            >
              View Tiers <FiArrowUpRight />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
